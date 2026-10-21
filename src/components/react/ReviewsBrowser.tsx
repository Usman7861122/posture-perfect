import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';
import { ease } from '../../lib/motion';

type Review = { name: string; text: string; topic: string };
interface Props { reviews: Review[]; topics: string[]; readUrl: string; pageSize?: number }

const initials = (n: string) => n.replace(/[^A-Za-z .]/g, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

export default function ReviewsBrowser({ reviews, topics, readUrl, pageSize = 9 }: Props) {
  const [topic, setTopic] = useState('All');
  const [shown, setShown] = useState(pageSize);
  const list = useMemo(() => (topic === 'All' ? reviews : reviews.filter((r) => r.topic === topic)), [topic, reviews]);
  const visible = list.slice(0, shown);
  const tabs = ['All', ...topics];

  return (
    <MotionRoot>
      <div role="group" aria-label="Filter reviews" className="flex flex-wrap justify-center gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={topic === t}
            onClick={() => { setTopic(t); setShown(pageSize); }}
            className={`border px-5 py-2.5 text-sm transition-colors duration-300 ${topic === t ? 'border-forest-900 bg-forest-900 text-ivory-50' : 'border-forest-900/20 bg-ivory-50 text-forest-900 hover:border-gold-500'}`}
          >
            {t}
          </button>
        ))}
      </div>

      <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((r) => (
            <motion.li
              layout
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, ease }}
              className="group flex flex-col border border-forest-900/15 bg-ivory-50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500 hover:shadow-[0_24px_50px_-30px_rgba(7,26,21,0.5)]"
            >
              <div className="flex items-center justify-between">
                <span aria-label="5 out of 5 stars" className="flex gap-0.5 text-gold-500">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-current"><path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L1.4 7.8l6-.8z" /></svg>
                  ))}
                </span>
                <span aria-hidden="true" className="font-serif text-5xl leading-none text-gold-400/60">“</span>
              </div>
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-forest-900/85">{r.text}</blockquote>
              <footer className="mt-6 flex items-center gap-3 border-t border-forest-900/10 pt-5">
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center bg-forest-900 font-serif text-lg text-gold-300">{initials(r.name)}</span>
                <span>
                  <span className="block text-sm font-medium text-forest-900">{r.name}</span>
                  <span className="block text-xs uppercase tracking-[0.15em] text-gold-700">Google review</span>
                </span>
              </footer>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
        {shown < list.length && (
          <button type="button" onClick={() => setShown((s) => s + pageSize)} className="btn-dark">
            Show more reviews ({list.length - shown} left)
          </button>
        )}
        <a href={readUrl} target="_blank" rel="noopener" className="btn-outline">Read all on Google</a>
      </div>
    </MotionRoot>
  );
}
