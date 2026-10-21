import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import MotionRoot from '../../lib/MotionRoot';
import { ease } from '../../lib/motion';
import { site } from '../../data/site';

// Hero video: the last 10 seconds of the Higgsfield clip, in /public/videos.
const VIDEO = { desktop: '/videos/hero.mp4', mobile: '/videos/hero-mobile.mp4', poster: '/videos/hero-poster.jpg' };

const lines = ['Eliminate Pain.', 'Restore Function.', 'Optimize Wellness.'];

function HeroInner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const vid = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [useVideo, setUseVideo] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if ((navigator as any).connection?.saveData) return;
    setUseVideo(true);
  }, []);

  useEffect(() => {
    const v = vid.current;
    if (!useVideo || !v) return;
    const onPlay = () => setPlaying(true);
    v.addEventListener('playing', onPlay);
    v.src = window.innerWidth < 768 ? VIDEO.mobile : VIDEO.desktop;
    v.play().catch(() => {});
    return () => v.removeEventListener('playing', onPlay);
  }, [useVideo]);


  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-forest-950 pb-60 pt-40 sm:pb-44">
      {/* first frame of the video, so there is never a different picture before it plays */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: `url(${VIDEO.poster})` }} />
      {useVideo && (
        <video
          ref={vid}
          muted
          loop
          poster={VIDEO.poster}
          playsInline
          autoPlay
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          className={`absolute inset-0 -z-[15] h-full w-full object-cover transition-opacity duration-1000 ${playing ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/75 via-forest-950/40 via-[45%] to-transparent to-[78%]" />

      <motion.div style={{ y: textY, opacity: fade }} className={`container-page relative hero-on-video`}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.5 }}
          className="eyebrow eyebrow-light mb-8"
        >
          Serving Dallas, McKinney &amp; North Texas since {site.since}
        </motion.p>

        <h1 className="max-w-3xl text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.02] text-ivory-50">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.12em]">
              <motion.span
                className={`block ${i === 2 ? 'italic gold-text' : ''}`}
                initial={{ y: '115%', rotate: 2 }}
                animate={{ y: '0%', rotate: 0 }}
                transition={{ duration: 1.2, ease, delay: 0.7 + i * 0.18 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease, delay: 1.5 }}
          className="my-9 block h-px w-40 origin-left bg-gradient-to-r from-gold-400 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.6 }}
          className="max-w-lg text-base leading-relaxed text-ivory-100/85 sm:text-lg"
        >
          Orthopedic and neurological evaluation, sports injury care, physiotherapy and chiropractic treatment, for the whole body, without a one-size-fits-all plan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.8 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <a href="/contact" className="btn-gold btn-book">Schedule an Evaluation</a>
          <a href={site.phoneHref} className="btn-outline-light">Call {site.phone}</a>
        </motion.div>
      </motion.div>

      {/* trust strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 2.1 }}
        className={`absolute inset-x-0 bottom-0 border-t border-ivory-50/25 transition-colors duration-1000 hero-on-video bg-transparent`}
      >
        <div className="container-page grid grid-cols-2 gap-y-3 py-5 text-ivory-100 sm:grid-cols-4">
          {[
            [`${site.rating} / 5`, `${site.reviewCount} patient reviews`],
            [`Since ${site.since}`, 'Serving North Texas'],
            ['2 Locations', 'Dallas & McKinney'],
            ['One Team', 'Spine, sports & pain care'],
          ].map(([a, b]) => (
            <p key={a} className="text-sm">
              <span className="block font-serif text-2xl text-gold-300">{a}</span>
              <span className="text-ivory-200/75">{b}</span>
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default function Hero() {
  return (
    <MotionRoot>
      <HeroInner />
    </MotionRoot>
  );
}
