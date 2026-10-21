import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';
import { fadeUp, stagger } from '../../lib/motion';
import { phases } from '../../data/content';

function Inner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] });
  const prog = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });

  return (
    <div ref={ref} className="relative">
      {/* progress rail (horizontal on desktop) */}
      <div aria-hidden="true" className="absolute left-0 right-0 top-[3.1rem] hidden h-px bg-ivory-50/15 lg:block" />
      <motion.div
        aria-hidden="true"
        style={{ scaleX: prog }}
        className="absolute left-0 right-0 top-[3.1rem] hidden h-px origin-left bg-gradient-to-r from-gold-300 to-gold-500 shadow-[0_0_14px_rgba(208,178,122,0.8)] lg:block"
      />
      <motion.ol
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {phases.map((p) => (
          <motion.li
            key={p.n}
            variants={fadeUp}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="group relative overflow-hidden rounded-sm border border-ivory-50/15 bg-forest-950/55 p-7 pt-6 backdrop-blur-md transition-colors duration-500 hover:border-gold-400/70 hover:bg-forest-900/80"
          >
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-sm bg-gold-500 font-serif text-xl text-forest-950 ring-8 ring-forest-950/60 transition-transform duration-500 group-hover:scale-110">
              {p.n}
            </span>
            <h3 className="relative z-10 mt-8 text-3xl text-ivory-50">{p.title}</h3>
            <p className="relative z-10 mt-3 text-ivory-200/80">{p.text}</p>
            <span aria-hidden="true" className="pointer-events-none absolute -bottom-6 -right-2 font-serif text-[9rem] leading-none text-ivory-50/[0.04] transition-all duration-700 group-hover:-translate-y-2 group-hover:text-gold-400/15">
              {p.n}
            </span>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}

export default function Phases() {
  return (
    <MotionRoot>
      <Inner />
    </MotionRoot>
  );
}
