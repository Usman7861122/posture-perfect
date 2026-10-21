import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';
import { ease } from '../../lib/motion';
import { site } from '../../data/site';
import { img } from '../../data/images';
import { treatments, conditions, team, href } from '../../data/nav';

type Key = 'treatments' | 'conditions' | 'team' | 'contact';

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Treatments', key: 'treatments' as Key },
  { label: 'Conditions', key: 'conditions' as Key },
  { label: 'Our Providers', key: 'team' as Key },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', key: 'contact' as Key },
];

const Chevron = ({ open }: { open: boolean }) => (
  <svg aria-hidden="true" viewBox="0 0 12 12" className={`h-2.5 w-2.5 fill-none stroke-current transition-transform duration-300 ${open ? 'rotate-180' : ''}`} strokeWidth="1.6">
    <path d="M2 4.5l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const linkCls = 'group/l flex min-h-9 items-center gap-2 py-1 text-[0.95rem] text-forest-900 transition-colors hover:text-gold-700';
const Arrow = () => (
  <span aria-hidden="true" className="-translate-x-1 text-gold-600 opacity-0 transition-all duration-300 group-hover/l:translate-x-0 group-hover/l:opacity-100">→</span>
);

/* ---------- panel frame: dark intro block on the left, content on the right ---------- */
function Frame({ eyebrow, title, text, cta, children, onNavigate }: { eyebrow: string; title: string; text: string; cta: { label: string; href: string }; children: ReactNode; onNavigate: () => void }) {
  return (
    <div className="grid overflow-hidden border border-gold-500/40 bg-ivory-50 shadow-[0_40px_80px_-30px_rgba(7,26,21,0.45)] lg:grid-cols-[300px_1fr]">
      <div className="on-dark flex flex-col justify-between bg-forest-900 p-8 text-ivory-50">
        <div>
          <p className="eyebrow !text-[10px]">{eyebrow}</p>
          <p className="mt-5 font-serif text-3xl leading-tight">{title}</p>
          <p className="mt-4 text-sm leading-relaxed text-ivory-200/75">{text}</p>
        </div>
        <a href={cta.href} onClick={onNavigate} className="group mt-8 inline-flex min-h-11 items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-gold-300 hover:text-gold-400">
          {cta.label} <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
      <div className="p-8">{children}</div>
    </div>
  );
}

const Heading = ({ children }: { children: ReactNode }) => (
  <p className="mb-3 border-b border-forest-900/10 pb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-gold-700">{children}</p>
);

function Panel({ k, close }: { k: Key; close: () => void }) {
  if (k === 'treatments')
    return (
      <Frame eyebrow="Treatments" title="Care for the whole body." text="Spine, sports, pain and rehabilitation care under one roof." cta={{ label: 'All treatments', href: '/treatments/' }} onNavigate={close}>
        <div className="grid grid-cols-[1.7fr_1fr] gap-10">
          <div>
            <Heading>Core treatments</Heading>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-1">
              {treatments.core.map((i) => (
                <li key={i.title}>
                  <a href={href(i)} onClick={close} className="group/l block py-2">
                    <span className="flex items-center gap-2 font-serif text-xl leading-tight text-forest-900 transition-colors group-hover/l:text-gold-700">
                      {i.title} <Arrow />
                    </span>
                    <span className="mt-1 block text-sm leading-snug text-muted">{i.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Heading>More care</Heading>
            <ul>
              {treatments.more.map((i) => (
                <li key={i.title}>
                  <a href={href(i)} onClick={close} className={linkCls}>{i.title} <Arrow /></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Frame>
    );

  if (k === 'conditions')
    return (
      <Frame eyebrow="Conditions we treat" title="Find the cause. Fix it at the source." text="Not sure what you have? Call us and we will point you the right way." cta={{ label: 'All conditions', href: '/condition-we-treat/' }} onNavigate={close}>
        <div className="grid grid-cols-3 gap-8">
          {conditions.map((g) => (
            <div key={g.group}>
              <Heading>{g.group}</Heading>
              <ul>
                {g.items.map((i) => (
                  <li key={i.title}>
                    <a href={href(i)} onClick={close} className={linkCls}>{i.title} <Arrow /></a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Frame>
    );

  if (k === 'team')
    return (
      <Frame eyebrow="Our providers" title="Experts. One plan." text="Chiropractic physicians, medical providers and orthopedic spine expertise." cta={{ label: 'All providers', href: '/our-team/' }} onNavigate={close}>
        <Heading>Providers</Heading>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
          {team.map((m) => (
            <li key={m.name}>
              <a href={href(m)} onClick={close} className="group/l flex items-center gap-4 py-1">
                <span className="relative block h-16 w-14 shrink-0 overflow-hidden rounded-sm bg-forest-800">
                  <img src={m.image} alt="" width={56} height={64} loading="lazy" className="h-full w-full object-cover object-top grayscale-[30%] transition-all duration-500 group-hover/l:scale-110 group-hover/l:grayscale-0" onError={(e) => (e.currentTarget.style.display = 'none')} />
                </span>
                <span>
                  <span className="block font-serif text-xl leading-tight text-forest-900 transition-colors group-hover/l:text-gold-700">{m.name}</span>
                  <span className="mt-0.5 block text-sm text-muted">{m.role}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Frame>
    );

  return (
    <Frame eyebrow="Contact" title="Two offices, close to you." text="Call us or book online. We will confirm your visit by phone." cta={{ label: 'Book online', href: '/contact' }} onNavigate={close}>
      <div className="grid grid-cols-2 gap-5">
        {site.locations.map((l) => (
          <a key={l.id} href={`/locations/${l.slug}/`} onClick={close} className="group/l block border border-forest-900/15 p-6 transition-colors duration-300 hover:border-gold-500 hover:bg-ivory-100">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-gold-700">{l.city}, TX</p>
            <p className="mt-2 font-serif text-2xl leading-tight text-forest-900">{l.name}</p>
            <address className="mt-3 text-sm not-italic leading-relaxed text-muted">{l.street}<br />{l.cityLine}</address>
            <p className="mt-3 text-sm text-forest-900">{site.phone}</p>
            <p className="mt-1 text-xs text-muted">Mon, Wed, Thu 8–6 · Tue, Fri 8–2</p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gold-700">Hours &amp; map <span aria-hidden="true" className="transition-transform duration-300 group-hover/l:translate-x-1">→</span></span>
          </a>
        ))}
      </div>
    </Frame>
  );
}

/* ---------- mobile accordion ---------- */
function MobileSection({ label, k, open, setOpen, children }: { label: string; k: string; open: string | null; setOpen: (v: string | null) => void; children: ReactNode }) {
  const isOpen = open === k;
  return (
    <li className="border-b border-ivory-50/10">
      <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : k)} className="flex min-h-14 w-full items-center justify-between py-3 text-left font-serif text-3xl text-ivory-50">
        {label}
        <span aria-hidden="true" className="relative block h-8 w-8 border border-ivory-50/25">
          <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 bg-gold-300" />
          <motion.span animate={{ rotate: isOpen ? 0 : 90 }} className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 bg-gold-300" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease }} className="overflow-hidden">
            <div className="pb-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

const mLink = 'flex min-h-11 items-center text-base text-ivory-200/85 hover:text-gold-300';

export default function Header() {
  const [open, setOpen] = useState<Key | null>(null);
  const [mobile, setMobile] = useState(false);
  const [msec, setMsec] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const wrap = useRef<HTMLDivElement>(null);

  const closeMenu = () => setOpen(null);
  const openNow = (k: Key) => { window.clearTimeout(timer.current); setOpen(k); };
  const closeSoon = () => { window.clearTimeout(timer.current); timer.current = window.setTimeout(closeMenu, 160); };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(null); setMobile(false); } };
    const onDown = (e: MouseEvent) => { if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(null); };
    window.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => { window.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onDown); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobile]);

  const closeMobile = () => setMobile(false);

  return (
    <MotionRoot>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <div ref={wrap} className="relative mx-auto max-w-7xl">
          <div className={`flex h-16 items-center justify-between rounded-sm border px-4 pr-2 backdrop-blur-xl transition-all duration-500 sm:px-6 sm:pr-2.5 ${scrolled || open ? 'border-gold-500/40 bg-ivory-50/95 shadow-[0_10px_40px_-15px_rgba(7,26,21,0.35)]' : 'border-ivory-50/30 bg-ivory-50/90'}`}>
            <a href="/" aria-label={`${site.name}, home`} className="flex shrink-0 items-center">
              <img src={img.logo} alt={site.name} width={803} height={177} className="h-9 w-auto sm:h-10" />
            </a>

            <nav aria-label="Main" className="hidden xl:block">
              <ul className="flex items-center gap-1">
                {links.map((l) => (
                  <li key={l.label} onMouseEnter={() => (l.key ? openNow(l.key) : closeSoon())} onMouseLeave={closeSoon}>
                    {l.key ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={open === l.key}
                          aria-haspopup="true"
                          onClick={() => (open === l.key ? closeMenu() : openNow(l.key!))}
                          className={`flex min-h-11 items-center gap-1.5 px-3.5 text-sm font-medium transition-colors ${open === l.key ? 'text-gold-700' : 'text-forest-900 hover:text-gold-700'}`}
                        >
                          {l.label} <Chevron open={open === l.key} />
                        </button>
                        <AnimatePresence>
                          {open === l.key && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.28, ease }}
                              className="absolute left-0 right-0 top-full z-10 pt-2 before:absolute before:-top-2 before:left-0 before:h-4 before:w-full"
                              onMouseEnter={() => openNow(l.key!)}
                            >
                              <Panel k={l.key} close={closeMenu} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a href={l.href} className="flex min-h-11 items-center px-3.5 text-sm font-medium text-forest-900 transition-colors hover:text-gold-700">{l.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <a href={site.phoneHref} className="hidden px-3 text-sm font-medium text-forest-900 hover:text-gold-700 2xl:block">{site.phone}</a>
              <a href="/contact" className="btn-dark btn-book hidden !min-h-11 !px-6 sm:inline-flex">Book Online</a>
              <button
                type="button"
                onClick={() => setMobile((v) => !v)}
                aria-expanded={mobile}
                aria-controls="mobile-menu"
                aria-label={mobile ? 'Close menu' : 'Open menu'}
                className="relative flex h-11 w-11 items-center justify-center rounded-sm bg-forest-900 xl:hidden"
              >
                <span className="relative block h-3 w-5">
                  <motion.span className="absolute left-0 top-0 h-px w-5 bg-ivory-50" animate={mobile ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} />
                  <motion.span className="absolute bottom-0 left-0 h-px w-5 bg-ivory-50" animate={mobile ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* soft page dim behind the mega menu */}
      <AnimatePresence>
        {open && (
          <motion.div aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="pointer-events-none fixed inset-0 z-40 hidden bg-forest-950/35 xl:block" />
        )}
      </AnimatePresence>

      {/* mobile / tablet menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease }}
            className="fixed inset-0 z-40 overflow-y-auto bg-forest-950 px-6 pb-12 pt-28"
          >
            <ul>
              <li className="border-b border-ivory-50/10"><a href="/#about" onClick={closeMobile} className="flex min-h-14 items-center py-3 font-serif text-3xl text-ivory-50">About</a></li>

              <MobileSection label="Treatments" k="t" open={msec} setOpen={setMsec}>
                <ul>
                  {[...treatments.core, ...treatments.more].map((i) => (
                    <li key={i.title}><a href={href(i)} onClick={closeMobile} className={mLink}>{i.title}</a></li>
                  ))}
                </ul>
              </MobileSection>

              <MobileSection label="Conditions" k="c" open={msec} setOpen={setMsec}>
                {conditions.map((g) => (
                  <div key={g.group} className="mb-4">
                    <p className="mb-1 text-[10px] uppercase tracking-[0.25em] text-gold-400">{g.group}</p>
                    <ul>{g.items.map((i) => <li key={i.title}><a href={href(i)} onClick={closeMobile} className={mLink}>{i.title}</a></li>)}</ul>
                  </div>
                ))}
              </MobileSection>

              <MobileSection label="Our Providers" k="m" open={msec} setOpen={setMsec}>
                <ul>
                  {team.map((m) => (
                    <li key={m.name}>
                      <a href={href(m)} onClick={closeMobile} className="flex min-h-14 flex-col justify-center text-ivory-50">
                        <span className="text-base">{m.name}</span>
                        <span className="text-sm text-ivory-200/70">{m.role}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </MobileSection>

              <li className="border-b border-ivory-50/10"><a href="/reviews/" onClick={closeMobile} className="flex min-h-14 items-center py-3 font-serif text-3xl text-ivory-50">Reviews</a></li>
              <li className="border-b border-ivory-50/10"><a href="/blog/" onClick={closeMobile} className="flex min-h-14 items-center py-3 font-serif text-3xl text-ivory-50">Blog</a></li>

              <MobileSection label="Contact" k="o" open={msec} setOpen={setMsec}>
                {site.locations.map((l) => (
                  <a key={l.id} href={`/locations/${l.slug}/`} onClick={closeMobile} className="mb-3 block border border-ivory-50/15 p-4 text-ivory-50">
                    <span className="block text-[10px] uppercase tracking-[0.25em] text-gold-400">{l.city}, TX</span>
                    <span className="mt-1 block font-serif text-xl">{l.name}</span>
                    <span className="mt-1 block text-sm text-ivory-200/75">{l.street}, {l.cityLine}</span>
                  </a>
                ))}
              </MobileSection>
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <a href="/contact" onClick={closeMobile} className="btn-gold btn-book">Book Online</a>
              <a href={site.phoneHref} className="btn-outline-light">Call {site.phone}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionRoot>
  );
}
