import { motion, useReducedMotion } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';

const N = 5; // vertebrae
const H = 40; // vertebra height
const G0 = 8; // gap at rest
const G1 = 24; // gap while stretched
const TOP = 36;

const yAt = (i: number, gap: number) => TOP + i * (H + gap);

function Inner() {
  const reduce = useReducedMotion();
  const loop = { duration: 6, repeat: Infinity, ease: 'easeInOut' as const, times: [0, 0.5, 1] };

  return (
    <figure className="mx-auto w-full max-w-sm" aria-label="Diagram: the spine is gently stretched so the discs have more room">
      <svg viewBox="0 0 240 360" className="h-auto w-full" role="img" aria-hidden="true">
        {/* arrows */}
        <motion.g animate={reduce ? undefined : { opacity: [0, 1, 0], y: [6, -2, 6] }} transition={loop} style={{ opacity: reduce ? 1 : undefined }}>
          <path d="M120 22 L120 6 M112 14 L120 6 L128 14" stroke="#d0b27a" strokeWidth="2" fill="none" />
        </motion.g>
        <motion.g animate={reduce ? undefined : { opacity: [0, 1, 0], y: [-6, 2, -6] }} transition={loop} style={{ opacity: reduce ? 1 : undefined }}>
          <path d="M120 338 L120 354 M112 346 L120 354 L128 346" stroke="#d0b27a" strokeWidth="2" fill="none" />
        </motion.g>

        {/* discs */}
        {Array.from({ length: N - 1 }).map((_, i) => (
          <motion.rect
            key={`d${i}`}
            x="78"
            width="84"
            rx="3"
            fill="#b8975a"
            initial={{ y: yAt(i, reduce ? G1 : G0) + H, height: reduce ? G1 : G0 }}
            animate={reduce ? undefined : { y: [yAt(i, G0) + H, yAt(i, G1) + H, yAt(i, G0) + H], height: [G0, G1, G0] }}
            transition={loop}
          />
        ))}
        {/* vertebrae */}
        {Array.from({ length: N }).map((_, i) => (
          <motion.rect
            key={`v${i}`}
            x="62"
            width="116"
            height={H}
            rx="4"
            fill="#ede6d6"
            initial={{ y: yAt(i, reduce ? G1 : G0) }}
            animate={reduce ? undefined : { y: [yAt(i, G0), yAt(i, G1), yAt(i, G0)] }}
            transition={loop}
          />
        ))}
      </svg>
      <figcaption className="mt-2 text-center text-xs uppercase tracking-[0.25em] text-gold-300">
        More room for discs and nerves
      </figcaption>
    </figure>
  );
}

export default function DecompressionDiagram() {
  return (
    <MotionRoot>
      <Inner />
    </MotionRoot>
  );
}
