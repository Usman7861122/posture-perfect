import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';
import { ease } from '../../lib/motion';
import { why } from '../../data/content';

function Inner() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 55%'] });
  const grow = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <ol ref={ref} className="relative ml-3 space-y-12 sm:ml-5 md:space-y-16">
      {/* base line + gold progress line */}
      <span aria-hidden="true" className="absolute bottom-0 left-0 top-2 w-px bg-forest-900/15" />
      <motion.span
        aria-hidden="true"
        style={{ scaleY: grow }}
        className="absolute bottom-0 left-0 top-2 w-px origin-top bg-gradient-to-b from-gold-400 to-gold-600 shadow-[0_0_12px_rgba(184,151,90,0.7)]"
      />
      {why.map((w, i) => (
        <motion.li
          key={w.title}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
          transition={{ duration: 0.9, ease }}
          className="relative pl-10 sm:pl-14"
        >
          <motion.span
            aria-hidden="true"
            initial={{ scale: 0.4, backgroundColor: '#fcfaf5' }}
            whileInView={{ scale: 1, backgroundColor: '#b8975a' }}
            viewport={{ margin: '-30% 0px -30% 0px' }}
            transition={{ duration: 0.6, ease }}
            className="absolute -left-[9px] top-2 h-[18px] w-[18px] rounded-sm border border-gold-500 ring-4 ring-ivory-50"
          />
          <span className="font-serif text-5xl leading-none text-gold-500/50 sm:text-6xl">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="mt-2 text-2xl text-forest-900 sm:text-3xl">{w.title}</h3>
          <p className="mt-3 max-w-xl text-muted">{w.text}</p>
        </motion.li>
      ))}
    </ol>
  );
}

export default function WhyTimeline() {
  return (
    <MotionRoot>
      <Inner />
    </MotionRoot>
  );
}
