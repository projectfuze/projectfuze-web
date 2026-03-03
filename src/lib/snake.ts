export type Direction = 'up' | 'down' | 'left' | 'right';

export interface Position {
  row: number;
  col: number;
}

export type GameStatus = 'running' | 'paused' | 'game-over' | 'won';

export interface SnakeGameConfig {
  rows: number;
  cols: number;
  initialSnake?: Position[];
  initialDirection?: Direction;
}

export interface SnakeGameState {
  rows: number;
  cols: number;
  snake: Position[];
  direction: Direction;
  pendingDirection: Direction | null;
  food: Position;
  score: number;
  status: GameStatus;
}

export type RandomFn = () => number;

const DEFAULT_ROWS = 16;
const DEFAULT_COLS = 16;

const DEFAULT_SNAKE: Position[] = [
  { row: 8, col: 8 },
  { row: 8, col: 7 },
  { row: 8, col: 6 },
];

const DIRECTION_VECTORS: Record<Direction, Position> = {
  up: { row: -1, col: 0 },
  down: { row: 1, col: 0 },
  left: { row: 0, col: -1 },
  right: { row: 0, col: 1 },
};

function toKey(position: Position): string {
  return `${position.row}:${position.col}`;
}

function isWithinBounds(position: Position, rows: number, cols: number): boolean {
  return position.row >= 0 && position.row < rows && position.col >= 0 && position.col < cols;
}

function isOppositeDirection(a: Direction, b: Direction): boolean {
  return (
    (a === 'up' && b === 'down') ||
    (a === 'down' && b === 'up') ||
    (a === 'left' && b === 'right') ||
    (a === 'right' && b === 'left')
  );
}

export function getRandomFreeCell(
  rows: number,
  cols: number,
  occupied: Position[],
  randomFn: RandomFn = Math.random,
): Position | null {
  const occupiedSet = new Set(occupied.map(toKey));
  const freeCells: Position[] = [];

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (!occupiedSet.has(`${row}:${col}`)) {
        freeCells.push({ row, col });
      }
    }
  }

  if (freeCells.length === 0) {
    return null;
  }

  const index = Math.floor(randomFn() * freeCells.length);
  return freeCells[index];
}

export function createInitialSnakeGameState(
  config: Partial<SnakeGameConfig> = {},
  randomFn: RandomFn = Math.random,
): SnakeGameState {
  const rows = config.rows ?? DEFAULT_ROWS;
  const cols = config.cols ?? DEFAULT_COLS;
  const snake = config.initialSnake ?? DEFAULT_SNAKE;
  const direction = config.initialDirection ?? 'right';

  const food = getRandomFreeCell(rows, cols, snake, randomFn);

  if (!food) {
    throw new Error('Cannot create game state: no space available for food.');
  }

  return {
    rows,
    cols,
    snake,
    direction,
    pendingDirection: null,
    food,
    score: 0,
    status: 'running',
  };
}

export function queueDirection(state: SnakeGameState, nextDirection: Direction): SnakeGameState {
  if (state.status !== 'running') {
    return state;
  }

  if (state.pendingDirection) {
    return state;
  }

  if (nextDirection === state.direction || isOppositeDirection(state.direction, nextDirection)) {
    return state;
  }

  return {
    ...state,
    pendingDirection: nextDirection,
  };
}

export function pauseGame(state: SnakeGameState): SnakeGameState {
  if (state.status !== 'running') {
    return state;
  }

  return {
    ...state,
    status: 'paused',
  };
}

export function resumeGame(state: SnakeGameState): SnakeGameState {
  if (state.status !== 'paused') {
    return state;
  }

  return {
    ...state,
    status: 'running',
  };
}

export function tickSnakeGame(
  state: SnakeGameState,
  randomFn: RandomFn = Math.random,
): SnakeGameState {
  if (state.status !== 'running') {
    return state;
  }

  const direction = state.pendingDirection ?? state.direction;
  const movement = DIRECTION_VECTORS[direction];
  const head = state.snake[0];
  const nextHead: Position = {
    row: head.row + movement.row,
    col: head.col + movement.col,
  };

  if (!isWithinBounds(nextHead, state.rows, state.cols)) {
    return {
      ...state,
      direction,
      pendingDirection: null,
      status: 'game-over',
    };
  }

  const willEat = nextHead.row === state.food.row && nextHead.col === state.food.col;
  const bodyToCheck = willEat ? state.snake : state.snake.slice(0, -1);
  const bodyCollision = bodyToCheck.some(
    (segment) => segment.row === nextHead.row && segment.col === nextHead.col,
  );

  if (bodyCollision) {
    return {
      ...state,
      direction,
      pendingDirection: null,
      status: 'game-over',
    };
  }

  const grownSnake = [nextHead, ...state.snake];
  const nextSnake = willEat ? grownSnake : grownSnake.slice(0, -1);

  if (willEat) {
    const nextFood = getRandomFreeCell(state.rows, state.cols, nextSnake, randomFn);

    if (!nextFood) {
      return {
        ...state,
        snake: nextSnake,
        direction,
        pendingDirection: null,
        score: state.score + 1,
        status: 'won',
      };
    }

    return {
      ...state,
      snake: nextSnake,
      direction,
      pendingDirection: null,
      food: nextFood,
      score: state.score + 1,
      status: 'running',
    };
  }

  return {
    ...state,
    snake: nextSnake,
    direction,
    pendingDirection: null,
  };
}
