import { useState } from 'react';
import { motion } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';
import { fadeUp, stagger } from '../../lib/motion';
import { services } from '../../data/content';

type S = (typeof services)[number];

function Card({ s, i }: { s: S; i: number }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.li variants={fadeUp}>
      <div
        className="flip aspect-[4/5] cursor-pointer"
        data-flipped={flipped}
        tabIndex={0}
        role="group"
        aria-label={`${s.title}. ${s.text}`}
        onClick={() => setFlipped((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setFlipped((v) => !v);
          }
        }}
      >
        <div className="flip-inner">
          {/* front */}
          <div className="flip-face ph">
            <img src={s.image} alt="" loading="lazy" width={768} height={960} className="h-full w-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <span className="mb-3 block h-px w-8 bg-gold-400" />
              <h3 className="text-2xl leading-tight text-ivory-50 sm:text-[1.7rem]">{s.title}</h3>
              <span className="mt-3 inline-block text-[11px] uppercase tracking-[0.2em] text-gold-300">Hover to explore</span>
            </div>
          </div>
          {/* back */}
          <div className="flip-face flip-back flex flex-col justify-between bg-forest-900 p-6 text-ivory-100 ring-1 ring-inset ring-gold-500/50 sm:p-8">
            <div>
              <span className="font-serif text-5xl text-gold-400/60">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-2xl text-ivory-50">{s.title}</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ivory-200/85">{s.text}</p>
            </div>
            <a
              href={s.live ? `/treatments/${s.slug}/` : '/contact'}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-gold-300 hover:text-gold-400"
            >
              Explore this treatment <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </motion.li>
  );
}

export default function ServicesFlip() {
  return (
    <MotionRoot>
      <motion.ul
        variants={stagger(0.09)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6"
      >
        {services.map((s, i) => (
          <Card key={s.title} s={s} i={i} />
        ))}
      </motion.ul>
    </MotionRoot>
  );
}
