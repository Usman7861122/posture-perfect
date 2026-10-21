import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';
import { ease } from '../../lib/motion';
import { reviews } from '../../data/reviews';
import { site } from '../../data/site';

const Star = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 fill-gold-500">
    <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6L10 15l-5.3 3 1.1-6L1.4 7.8l6-.8z" />
  </svg>
);

// Real Google reviews, word for word (see src/data/reviews.ts).
const pick = ['Mary Roos', 'Jordyn T.', 'Ryan Giniel', 'Thomas White', 'Conor Dines-Booth', 'Judith Mendez Guerrero'];
const testimonials = pick.map((n) => reviews.find((r) => r.name === n)!);

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 8000);
    return () => clearInterval(t);
  }, [paused, n]);

  const t = testimonials[i];

  return (
    <MotionRoot>
      <div
        className="relative mx-auto max-w-4xl text-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <span aria-hidden="true" className="pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2 font-serif text-[9rem] leading-none text-gold-500/20">“</span>

        <div className="relative flex min-h-[22rem] flex-col items-center justify-center sm:min-h-[20rem]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) setI((v) => (v + 1) % n);
                if (info.offset.x > 60) setI((v) => (v - 1 + n) % n);
              }}
            >
              <div className="mb-6 flex justify-center gap-1" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} />)}
              </div>
              <blockquote className="font-serif text-xl italic leading-snug text-forest-900 sm:text-2xl lg:text-[1.75rem]">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-8 text-sm uppercase tracking-[0.22em] text-gold-700">{t.name}</figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-5">
          <button type="button" aria-label="Previous review" onClick={() => setI((v) => (v - 1 + n) % n)} className="flex h-12 w-12 items-center justify-center rounded-sm border border-forest-900/25 text-forest-900 transition-colors hover:bg-forest-900 hover:text-ivory-50">←</button>
          <div className="flex gap-1">
            {testimonials.map((_, k) => (
              <button key={k} type="button" aria-label={`Show review ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} className="flex h-11 w-7 items-center justify-center">
                <span className={`block h-1.5 rounded-sm transition-all duration-500 ${k === i ? 'w-8 bg-gold-500' : 'w-1.5 bg-forest-900/25'}`} />
              </button>
            ))}
          </div>
          <button type="button" aria-label="Next review" onClick={() => setI((v) => (v + 1) % n)} className="flex h-12 w-12 items-center justify-center rounded-sm border border-forest-900/25 text-forest-900 transition-colors hover:bg-forest-900 hover:text-ivory-50">→</button>
        </div>

        <p className="mt-4 text-sm text-muted">
          Rated <strong className="text-forest-900">{site.rating} / 5</strong> from {site.reviewCount} patient reviews
        </p>
      </div>
    </MotionRoot>
  );
}
