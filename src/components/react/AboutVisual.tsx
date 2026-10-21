import { motion } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';
import { ease } from '../../lib/motion';
import { img } from '../../data/images';

export default function AboutVisual({ years }: { years: number }) {
  return (
    <MotionRoot>
      {/* fills the full height of the text column, so there is no empty space */}
      <div className="relative min-h-[460px] sm:min-h-[560px] lg:h-full lg:min-h-0">
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, ease }}
          className="absolute inset-0 bottom-10 left-6 overflow-hidden rounded-sm ph sm:left-10"
        >
          <img
            src={img.about}
            alt="Inside Posture Perfect Wellness Center"
            width={804}
            height={661}
            loading="lazy"
            className="h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease, delay: 0.35 }}
          className="absolute bottom-0 left-0 aspect-[4/3] w-[46%] overflow-hidden rounded-sm border-[6px] border-ivory-50 shadow-[0_20px_40px_-20px_rgba(7,26,21,0.4)] ph"
        >
          <img src={img.aboutAccent} alt="" width={803} height={536} loading="lazy" className="h-full w-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.6 }}
          className="absolute right-0 top-0 bg-gold-500 px-6 py-5 text-forest-950"
        >
          <span className="block font-serif text-5xl leading-none">{years}+</span>
          <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.2em]">Years of care</span>
        </motion.div>
      </div>
    </MotionRoot>
  );
}
