import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';

type Stat = { value: number; decimals?: number; prefix?: string; suffix?: string; label: string; plain?: boolean };

function Counter({ s }: { s: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      node.textContent = format(s.value);
      return;
    }
    const c = animate(s.plain ? s.value - 60 : 0, s.value, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (node.textContent = format(v)),
    });
    return () => c.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  function format(v: number) {
    return (s.prefix ?? '') + (s.plain ? Math.round(v).toString() : v.toFixed(s.decimals ?? 0)) + (s.suffix ?? '');
  }

  return (
    <div className="border-l border-gold-500/40 pl-6">
      <span ref={ref} className="block font-serif text-5xl text-gold-300 sm:text-6xl">{format(s.value)}</span>
      <span className="mt-2 block text-sm uppercase tracking-[0.15em] text-ivory-200/75">{s.label}</span>
    </div>
  );
}

export default function Stats({ stats }: { stats: Stat[] }) {
  return (
    <MotionRoot>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {stats.map((s) => (
          <Counter key={s.label} s={s} />
        ))}
      </div>
    </MotionRoot>
  );
}
