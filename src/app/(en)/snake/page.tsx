'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/Button';
import {
  createInitialSnakeGameState,
  pauseGame,
  queueDirection,
  resumeGame,
  tickSnakeGame,
  type Direction,
  type SnakeGameState,
} from '@/lib/snake';

const GRID_ROWS = 16;
const GRID_COLS = 16;
const GAME_SPEED_MS = 130;

const KEY_TO_DIRECTION: Record<string, Direction> = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  w: 'up',
  W: 'up',
  a: 'left',
  A: 'left',
  s: 'down',
  S: 'down',
  d: 'right',
  D: 'right',
};

function buildInitialState(): SnakeGameState {
  return createInitialSnakeGameState({ rows: GRID_ROWS, cols: GRID_COLS });
}

export default function SnakePage() {
  const [game, setGame] = useState<SnakeGameState>(() => buildInitialState());

  const snakeLookup = useMemo(() => {
    const positions = new Set<string>();
    for (const segment of game.snake) {
      positions.add(`${segment.row}:${segment.col}`);
    }
    return positions;
  }, [game.snake]);

  const headKey = `${game.snake[0].row}:${game.snake[0].col}`;
  const foodKey = `${game.food.row}:${game.food.col}`;

  const handleDirection = useCallback((direction: Direction) => {
    setGame((current) => queueDirection(current, direction));
  }, []);

  const handleRestart = useCallback(() => {
    setGame(buildInitialState());
  }, []);

  const handlePauseToggle = useCallback(() => {
    setGame((current) => {
      if (current.status === 'paused') {
        return resumeGame(current);
      }
      return pauseGame(current);
    });
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === ' ') {
        event.preventDefault();
        handlePauseToggle();
        return;
      }

      const direction = KEY_TO_DIRECTION[event.key];
      if (!direction) {
        return;
      }

      event.preventDefault();
      handleDirection(direction);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleDirection, handlePauseToggle]);

  useEffect(() => {
    if (game.status !== 'running') {
      return;
    }

    const intervalId = window.setInterval(() => {
      setGame((current) => tickSnakeGame(current));
    }, GAME_SPEED_MS);

    return () => window.clearInterval(intervalId);
  }, [game.status]);

  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#F5F5F5] min-h-[calc(100vh-80px)]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#3D3D3D] mb-2">Snake</h1>
          <p className="text-sm sm:text-base text-gray-600">Arrow keys or WASD to move. Space to pause.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-[#3D3D3D]">Score: <span className="font-bold">{game.score}</span></p>
            <p className="text-sm text-gray-600">
              {game.status === 'game-over' && 'Game over'}
              {game.status === 'paused' && 'Paused'}
              {game.status === 'won' && 'You won'}
              {game.status === 'running' && 'Running'}
            </p>
          </div>

          <div
            className="grid gap-[2px] bg-gray-200 p-[2px] rounded-md"
            style={{
              gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
            }}
          >
            {Array.from({ length: GRID_ROWS * GRID_COLS }, (_, index) => {
              const row = Math.floor(index / GRID_COLS);
              const col = index % GRID_COLS;
              const key = `${row}:${col}`;
              const isHead = key === headKey;
              const isSnake = snakeLookup.has(key);
              const isFood = key === foodKey;

              let cellClassName = 'bg-white';
              if (isFood) {
                cellClassName = 'bg-red-500';
              }
              if (isSnake) {
                cellClassName = isHead ? 'bg-[#3D3D3D]' : 'bg-[#D4A84B]';
              }

              return <div key={key} className={`aspect-square ${cellClassName}`} />;
            })}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button variant="dark" onClick={handleRestart}>Restart</Button>
            <Button
              variant="outline"
              onClick={handlePauseToggle}
              disabled={game.status === 'game-over' || game.status === 'won'}
            >
              {game.status === 'paused' ? 'Resume' : 'Pause'}
            </Button>
          </div>

          <div className="mt-6 mx-auto w-fit grid grid-cols-3 gap-2 sm:hidden">
            <div />
            <Button variant="outline" className="px-4 py-2" onClick={() => handleDirection('up')}>↑</Button>
            <div />
            <Button variant="outline" className="px-4 py-2" onClick={() => handleDirection('left')}>←</Button>
            <Button variant="outline" className="px-4 py-2" onClick={() => handleDirection('down')}>↓</Button>
            <Button variant="outline" className="px-4 py-2" onClick={() => handleDirection('right')}>→</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
