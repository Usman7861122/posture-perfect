import { motion } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';
import { fadeUp, stagger } from '../../lib/motion';
import { team } from '../../data/content';

const initials = (n: string) => n.split(',')[0].split(' ').map((p) => p[0]).slice(0, 2).join('');

export default function TeamGrid() {
  return (
    <MotionRoot>
      <motion.ul
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4 lg:gap-x-8"
      >
        {team.map((m) => (
          <motion.li key={m.name} variants={fadeUp} className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-forest-800 ring-1 ring-gold-500/30 transition-all duration-700 group-hover:ring-gold-500">
              <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center font-serif text-7xl text-gold-400/40">
                {initials(m.name)}
              </span>
              <img
                src={m.image}
                alt={`${m.name}, ${m.role}`}
                loading="lazy"
                width={600}
                height={800}
                className="relative h-full w-full object-cover object-top grayscale-[35%] transition-all duration-[1200ms] ease-[var(--ease-luxe)] group-hover:scale-105 group-hover:grayscale-0"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-forest-950 to-transparent p-5 pt-12 transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:translate-y-0 group-focus-within:translate-y-0 [@media(hover:none)]:translate-y-0">
                <a href={(m as { profile?: string }).profile ?? '/contact'} className="inline-flex min-h-11 items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-300">
                  {(m as { profile?: string }).profile ? 'View profile' : `Book with ${m.short.split(' ').slice(-1)[0]}`} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <h3 className="mt-5 text-xl leading-tight text-forest-900 sm:text-2xl">{m.name}</h3>
            <p className="mt-1 text-sm text-gold-700">{m.role}</p>
          </motion.li>
        ))}
      </motion.ul>
    </MotionRoot>
  );
}
