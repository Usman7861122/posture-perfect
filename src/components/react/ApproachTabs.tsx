import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';
import { ease } from '../../lib/motion';
import { approach } from '../../data/content';

export default function ApproachTabs() {
  const [active, setActive] = useState(0);
  const cur = approach[active];

  return (
    <MotionRoot>
      <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div role="tablist" aria-label="Our approach" className="flex flex-col">
          {approach.map((a, i) => (
            <button
              key={a.key}
              role="tab"
              id={`tab-${i}`}
              aria-selected={i === active}
              aria-controls={`panel-${i}`}
              onClick={() => setActive(i)}
              onMouseEnter={() => window.matchMedia('(hover:hover)').matches && setActive(i)}
              className={`group relative block w-full flex-1 border-b border-forest-900/15 py-6 text-left transition-colors ${i === active ? 'text-forest-900' : 'text-forest-900/50 hover:text-forest-900'}`}
            >
              <span className="flex items-center gap-5">
                <span className="font-serif text-3xl text-gold-500">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-serif text-3xl sm:text-4xl">{a.key}</span>
              </span>
              <AnimatePresence initial={false}>
                {i === active && (
                  <motion.span
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease }}
                    className="block overflow-hidden"
                  >
                    <span className="block pb-1 pl-[3.25rem] pt-4 text-base leading-relaxed text-muted">{a.text}</span>
                  </motion.span>
                )}
              </AnimatePresence>
              {i === active && (
                <motion.span layoutId="approach-line" className="absolute bottom-[-1px] left-0 h-px w-full bg-gold-500" transition={{ duration: 0.6, ease }} />
              )}
            </button>
          ))}
        </div>

        <div className="relative min-h-[380px]" role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={cur.key}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease }}
              className="relative h-full overflow-hidden rounded-sm ph"
            >
              <img src={cur.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/55 to-forest-950/10" />
              <div className="relative flex h-full min-h-[380px] flex-col justify-end p-7 sm:p-10">
                <h3 className="max-w-md text-3xl text-ivory-50 sm:text-4xl">{cur.title}</h3>
                
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </MotionRoot>
  );
}
