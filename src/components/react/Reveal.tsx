import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';
import { fadeUp, stagger } from '../../lib/motion';

type Props = { children: ReactNode; className?: string; stagger?: boolean; delay?: number };

/** Fade-up when scrolled into view. Use with client:visible. */
export default function Reveal({ children, className, stagger: useStagger, delay = 0 }: Props) {
  return (
    <MotionRoot>
      <motion.div
        className={className}
        variants={useStagger ? stagger(0.12, delay) : { hidden: fadeUp.hidden, show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        {children}
      </motion.div>
    </MotionRoot>
  );
}
