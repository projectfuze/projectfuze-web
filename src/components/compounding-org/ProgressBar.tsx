'use client';

interface ProgressBarProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

export function ProgressBar({ total, current, onDotClick }: ProgressBarProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[10000] flex items-center gap-2.5 bg-[#3D3D3D]/80 backdrop-blur-sm rounded-full px-4 py-2.5">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            i === current
              ? 'bg-[#D4A84B] scale-125'
              : 'bg-white/30 hover:bg-white/50'
          }`}
        />
      ))}
    </div>
  );
}
