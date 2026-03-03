'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SlideTitle } from './SlideTitle';
import { SlideProblem } from './SlideProblem';
import { SlideShift } from './SlideShift';
import { SlideTimeSavings } from './SlideTimeSavings';
import { SlideSystem } from './SlideSystem';
import { SlideDuo } from './SlideDuo';
import { SlideHowWeWork } from './SlideHowWeWork';
import { SlideNextStep } from './SlideNextStep';
import { ProgressBar } from '@/components/deck/ProgressBar';

const slides = [
  SlideTitle,
  SlideProblem,
  SlideShift,
  SlideTimeSavings,
  SlideSystem,
  SlideDuo,
  SlideHowWeWork,
  SlideNextStep,
];

export function Deck() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  const go = useCallback(
    (dir: 1 | -1) => {
      setCurrent((prev) => Math.max(0, Math.min(slides.length - 1, prev + dir)));
    },
    [],
  );

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'A' || tag === 'BUTTON' || tag === 'INPUT') return;

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          go(1);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          go(-1);
          break;
        case 'Escape':
          e.preventDefault();
          router.push('/de');
          break;
      }
    }

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [go, router]);

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    if (target.closest('a, button, input')) return;

    const x = e.clientX / window.innerWidth;
    if (x < 0.3) {
      go(-1);
    } else {
      go(1);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden bg-white cursor-pointer"
      onClick={handleClick}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-in-out will-change-transform"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((Slide, i) => (
          <div key={i} className="w-full h-full shrink-0">
            <Slide />
          </div>
        ))}
      </div>

      <ProgressBar total={slides.length} current={current} onDotClick={setCurrent} />
    </div>
  );
}
