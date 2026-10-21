import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';
import { ease } from '../../lib/motion';

/*
  Cookie consent. Three choices: Accept all, Reject non-essential, Customize.
  - Nothing except "essential" runs before the visitor chooses.
  - The choice is saved in a first-party cookie + localStorage for 12 months.
  - To load a tracking script only with consent, listen for the event:
      window.addEventListener('pp:consent', (e) => { if (e.detail.analytics) { ...load GA... } });
    or read window.ppConsent at any time.
  - The footer "Cookie settings" button calls window.openCookieSettings().
*/

type Choice = { essential: true; preferences: boolean; analytics: boolean; marketing: boolean };
const KEY = 'pp_cookie_consent_v1';
const MAX_AGE = 60 * 60 * 24 * 365;

const cats: { id: keyof Omit<Choice, 'essential'>; title: string; text: string }[] = [
  { id: 'preferences', title: 'Preferences', text: 'Remember choices you make on the site, so you do not have to repeat them.' },
  { id: 'analytics', title: 'Analytics', text: 'Help us see which pages are used, so we can make the site easier to use. Data is grouped, not about one person.' },
  { id: 'marketing', title: 'Marketing', text: 'Used to measure our ads and show you ads that are more useful. Off unless you say yes.' },
];

function read(): Choice | null {
  try {
    const raw = localStorage.getItem(KEY) ?? document.cookie.split('; ').find((c) => c.startsWith(KEY + '='))?.split('=')[1];
    if (!raw) return null;
    const v = JSON.parse(decodeURIComponent(raw));
    return { essential: true, preferences: !!v.preferences, analytics: !!v.analytics, marketing: !!v.marketing };
  } catch {
    return null;
  }
}

function save(c: Choice) {
  const json = JSON.stringify(c);
  try { localStorage.setItem(KEY, json); } catch {}
  document.cookie = `${KEY}=${encodeURIComponent(json)}; max-age=${MAX_AGE}; path=/; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`;
  (window as any).ppConsent = c;
  window.dispatchEvent(new CustomEvent('pp:consent', { detail: c }));
  // Google Consent Mode, if a tag is on the page.
  const gtag = (window as any).gtag;
  if (typeof gtag === 'function') {
    gtag('consent', 'update', {
      analytics_storage: c.analytics ? 'granted' : 'denied',
      ad_storage: c.marketing ? 'granted' : 'denied',
      ad_user_data: c.marketing ? 'granted' : 'denied',
      ad_personalization: c.marketing ? 'granted' : 'denied',
      functionality_storage: c.preferences ? 'granted' : 'denied',
    });
  }
}

function Toggle({ on, onChange, label, locked }: { on: boolean; onChange?: (v: boolean) => void; label: string; locked?: boolean }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      disabled={locked}
      onClick={() => onChange?.(!on)}
      className={`relative h-7 w-12 shrink-0 border transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 ${on ? 'border-gold-600 bg-gold-500' : 'border-forest-900/30 bg-ivory-200'} ${locked ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
    >
      <span className={`absolute top-0.5 h-5 w-5 bg-forest-900 transition-all duration-300 ${on ? 'left-6' : 'left-0.5'}`} />
    </button>
  );
}

export default function CookieConsent() {
  const [banner, setBanner] = useState(false);
  const [panel, setPanel] = useState(false);
  const [draft, setDraft] = useState<Choice>({ essential: true, preferences: false, analytics: false, marketing: false });
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const openPanel = useCallback(() => {
    lastFocus.current = document.activeElement as HTMLElement;
    setDraft(read() ?? { essential: true, preferences: false, analytics: false, marketing: false });
    setPanel(true);
  }, []);

  useEffect(() => {
    const saved = read();
    if (saved) (window as any).ppConsent = saved;
    else setBanner(true);
    (window as any).openCookieSettings = openPanel;
    const onEvt = () => openPanel();
    window.addEventListener('pp:cookie-settings', onEvt);
    return () => window.removeEventListener('pp:cookie-settings', onEvt);
  }, [openPanel]);

  // Panel: lock scroll, Esc to close, keep Tab inside, give focus back.
  useEffect(() => {
    if (!panel) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector<HTMLElement>('button, [href]')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab' && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener('keydown', onKey); };
  }, [panel]);

  function close() {
    setPanel(false);
    lastFocus.current?.focus?.();
  }
  function choose(c: Choice) {
    save(c);
    setBanner(false);
    setPanel(false);
  }
  const all: Choice = { essential: true, preferences: true, analytics: true, marketing: true };
  const none: Choice = { essential: true, preferences: false, analytics: false, marketing: false };

  return (
    <MotionRoot>
      <AnimatePresence>
        {banner && !panel && (
          <motion.section
            key="banner"
            role="region"
            aria-label="Cookie notice"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease }}
            className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-xl border border-gold-500/50 bg-forest-950 p-6 text-ivory-100 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] sm:left-6 sm:right-auto sm:mx-0 sm:p-7"
          >
            <p className="font-serif text-2xl text-ivory-50">We value your privacy</p>
            <p className="mt-2 text-sm leading-relaxed text-ivory-200/85">
              We use essential cookies to make this site work. With your OK, we also use cookies to remember your choices, understand how the site is used, and measure ads. Read our{' '}
              <a href="/cookie-policy/" className="text-gold-300 underline underline-offset-4 hover:text-gold-400">Cookie Policy</a>.
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <button type="button" onClick={() => choose(all)} className="btn-gold !px-5 !py-3 text-sm">Accept all</button>
              <button type="button" onClick={() => choose(none)} className="btn-outline-light !px-5 !py-3 text-sm">Reject non-essential</button>
              <button type="button" onClick={openPanel} className="px-3 py-3 text-sm text-gold-300 underline underline-offset-4 hover:text-gold-400">Customize</button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {panel && (
          <motion.div key="panel" className="fixed inset-0 z-[80] flex items-end justify-center bg-forest-950/70 p-3 backdrop-blur-sm sm:items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => e.target === e.currentTarget && close()}>
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="cc-title"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.5, ease }}
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-gold-500/50 bg-ivory-50 text-forest-900 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 border-b border-forest-900/10 p-6 sm:p-8">
                <div>
                  <h2 id="cc-title" className="font-serif text-3xl text-forest-900">Cookie settings</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">Choose which cookies we may use. You can change this at any time from the footer.</p>
                </div>
                <button type="button" onClick={close} aria-label="Close cookie settings" className="flex h-10 w-10 shrink-0 items-center justify-center border border-forest-900/20 text-xl leading-none hover:border-gold-500">×</button>
              </div>

              <ul className="divide-y divide-forest-900/10">
                <li className="flex items-start justify-between gap-6 p-6 sm:px-8">
                  <div>
                    <p className="font-medium">Essential <span className="ml-2 text-xs uppercase tracking-[0.15em] text-gold-700">Always on</span></p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">Needed for the site to work, for security, and to remember your cookie choice.</p>
                  </div>
                  <Toggle on locked label="Essential cookies, always on" />
                </li>
                {cats.map((c) => (
                  <li key={c.id} className="flex items-start justify-between gap-6 p-6 sm:px-8">
                    <div>
                      <p className="font-medium">{c.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{c.text}</p>
                    </div>
                    <Toggle on={draft[c.id]} onChange={(v) => setDraft({ ...draft, [c.id]: v })} label={`${c.title} cookies`} />
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2 border-t border-forest-900/10 bg-ivory-100 p-6 sm:flex-row sm:justify-end sm:px-8">
                <button type="button" onClick={() => choose(none)} className="btn-outline !px-5 !py-3 text-sm">Reject non-essential</button>
                <button type="button" onClick={() => choose(draft)} className="btn-dark !px-5 !py-3 text-sm">Save my choices</button>
                <button type="button" onClick={() => choose(all)} className="btn-gold !px-5 !py-3 text-sm">Accept all</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionRoot>
  );
}
