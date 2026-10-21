import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';
import { ease } from '../../lib/motion';

type Faq = { q: string; a: string };

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <MotionRoot>
      <div className="divide-y divide-forest-900/15 border-y border-forest-900/15">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <h3 className="!font-sans">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  id={`faq-btn-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className={`font-serif text-2xl transition-colors sm:text-[1.7rem] ${isOpen ? 'text-gold-700' : 'text-forest-900'}`}>{f.q}</span>
                  <span aria-hidden="true" className="relative block h-9 w-9 shrink-0 rounded-sm border border-forest-900/25">
                    <span className="absolute left-1/2 top-1/2 h-px w-3.5 -translate-x-1/2 bg-forest-900" />
                    <motion.span animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.4, ease }} className="absolute left-1/2 top-1/2 h-px w-3.5 -translate-x-1/2 bg-forest-900" />
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-7 text-muted">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </MotionRoot>
  );
}
