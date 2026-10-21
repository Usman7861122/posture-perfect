import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';
import { ease } from '../../lib/motion';

type Item = { when: string; title: string; text: string; points: string[] };

const defaultItems: Item[] = [
  {
    when: '2002',
    title: 'Doctor of Chiropractic',
    text: 'Parker University. The start of more than twenty years in clinical care.',
    points: ['Graduated with honors', 'Received a clinical excellence award', 'Earned a sports medicine certification from Harvard'],
  },
  {
    when: 'MBA',
    title: 'Healthcare Management',
    text: 'A business degree that adds leadership and clinic operations to his clinical skills.',
    points: ['Focus on healthcare operations and leadership', 'Has owned and managed multidisciplinary clinics', 'Has run surgical centers, from diagnosis to recovery'],
  },
  {
    when: '2005 to today',
    title: 'Advanced training',
    text: 'Years of extra study across several fields, so one doctor can see the whole picture.',
    points: ['Certified Surgical First Assistant', 'Advanced pain management', 'Sports medicine', 'Functional medicine, with a focus on blood chemistry', 'Blood lab analysis'],
  },
  {
    when: 'Today',
    title: 'Teaching & leading',
    text: 'Dr. Lohr leads his clinic and helps train the next generation of chiropractors.',
    points: ['Founder of Posture Perfect Wellness Center', 'Clinical faculty at Parker University', 'Works with orthopedic spine surgeons and pain specialists'],
  },
];

export default function CredentialsTimeline({ items = defaultItems }: { items?: Item[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 60%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <MotionRoot>
      <div ref={ref} className="relative mx-auto max-w-5xl">
        {/* the line, and the gold line that fills as you scroll */}
        <span aria-hidden="true" className="absolute bottom-2 left-5 top-2 w-px bg-forest-900/15 md:left-1/2" />
        <motion.span aria-hidden="true" style={{ scaleY: fill }} className="absolute bottom-2 left-5 top-2 w-px origin-top bg-gradient-to-b from-gold-400 to-gold-600 md:left-1/2" />

        <ol className="space-y-8 md:space-y-4">
          {items.map((it, i) => {
            const isOpen = open === i;
            const left = i % 2 === 0;
            return (
              <li key={it.title} className="relative md:grid md:grid-cols-2 md:gap-x-20">
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={`Show details: ${it.title}`}
                  className={`absolute left-5 top-7 z-10 flex h-5 w-5 -translate-x-1/2 rotate-45 items-center justify-center border transition-all duration-500 md:left-1/2 ${isOpen ? 'scale-125 border-gold-600 bg-gold-500 shadow-[0_0_0_6px_rgba(184,151,90,0.25)]' : 'border-gold-500 bg-ivory-50 hover:bg-gold-300'}`}
                />
                <motion.div
                  initial={{ opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, ease }}
                  className={`ml-12 md:ml-0 ${left ? 'md:col-start-1' : 'md:col-start-2'}`}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onClick={() => setOpen(i)}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setOpen(i))}
                    className={`group cursor-pointer border p-6 outline-none transition-all duration-500 focus-visible:ring-2 focus-visible:ring-gold-500 sm:p-8 ${isOpen ? 'border-gold-500 bg-forest-900 text-ivory-50 shadow-[0_30px_60px_-30px_rgba(7,26,21,0.6)]' : 'border-forest-900/15 bg-ivory-50 hover:-translate-y-1 hover:border-gold-500'}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className={`font-serif text-4xl leading-none transition-colors duration-500 ${isOpen ? 'text-gold-300' : 'text-gold-600'}`}>{it.when}</span>
                      <span aria-hidden="true" className={`relative block h-7 w-7 border transition-colors ${isOpen ? 'border-gold-400' : 'border-forest-900/25 group-hover:border-gold-500'}`}>
                        <span className={`absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 ${isOpen ? 'bg-gold-300' : 'bg-forest-900'}`} />
                        <span className={`absolute left-1/2 top-1/2 h-3 w-px -translate-y-1/2 transition-transform duration-300 ${isOpen ? 'scale-y-0 bg-gold-300' : 'bg-forest-900'}`} />
                      </span>
                    </div>
                    <h3 className={`mt-4 text-2xl sm:text-3xl ${isOpen ? 'text-ivory-50' : 'text-forest-900'}`}>{it.title}</h3>
                    <p className={`mt-2 text-sm leading-relaxed ${isOpen ? 'text-ivory-200/80' : 'text-muted'}`}>{it.text}</p>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease }}
                          className="overflow-hidden"
                        >
                          <li className="mt-5 border-t border-ivory-50/15 pt-5" aria-hidden="true" />
                          {it.points.map((p, k) => (
                            <motion.li
                              key={p}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.12 + k * 0.07, duration: 0.4 }}
                              className="flex items-start gap-3 py-1.5 text-sm text-ivory-100"
                            >
                              <span aria-hidden="true" className="mt-1.5 block h-2 w-2 shrink-0 rotate-45 bg-gold-400" />
                              {p}
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </MotionRoot>
  );
}
