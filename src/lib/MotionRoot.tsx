import type { ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';

/** Wrap every island. Turns animations off for people who asked their device for less motion. */
export default function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
