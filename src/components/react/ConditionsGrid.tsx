import { motion } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';
import { fadeUp, stagger } from '../../lib/motion';
import { conditions } from '../../data/content';

// column spans on desktop: rows of 2+1+1, 1+1+2, 2+2 so the grid always fills with no gaps
const spans = ['lg:col-span-2', '', '', '', '', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2'];

export default function ConditionsGrid() {
  return (
    <MotionRoot>
      <motion.ul
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid auto-rows-[240px] grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:auto-rows-[320px]"
      >
        {conditions.map((c, i) => (
          <motion.li
            key={c.title}
            variants={fadeUp}
            className={`group relative overflow-hidden rounded-sm ph ${spans[i] ?? ''}`}
          >
            <a href={`/condition-we-treat/${c.slug}/`} className="absolute inset-0 block" aria-label={`${c.title}. ${c.text}`}>
              <img
                src={c.image}
                alt=""
                loading="lazy"
                width={768}
                height={768}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-luxe)] group-hover:scale-110"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
              <div className="absolute inset-0 translate-y-full bg-forest-900/90 transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:translate-y-0 group-focus-within:translate-y-0 [@media(hover:none)]:hidden" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-ivory-50 sm:p-6">
                <h3 className="text-xl leading-tight sm:text-2xl">{c.title}</h3>
                <div className="grid grid-rows-[0fr] transition-all duration-700 ease-[var(--ease-luxe)] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] [@media(hover:none)]:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-3 text-sm leading-relaxed text-ivory-200/90">{c.text}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-300">
                      Get help <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </MotionRoot>
  );
}
