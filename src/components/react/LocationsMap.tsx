import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';
import { ease } from '../../lib/motion';
import { site } from '../../data/site';

export default function LocationsMap({ only }: { only?: string }) {
  const list = only ? site.locations.filter((l) => l.id === only) : site.locations;
  const [active, setActive] = useState(0);
  const loc = list[active];
  const today = new Date().getDay();
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(loc.query)}&z=15&output=embed`;
  const dir = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.query)}`;
  // show Monday first
  const order = [1, 2, 3, 4, 5, 6, 0];

  return (
    <MotionRoot>
      <div className="grid overflow-hidden rounded-sm border border-gold-500/30 bg-ivory-50 shadow-[0_30px_80px_-40px_rgba(7,26,21,0.45)] lg:grid-cols-[0.8fr_1.2fr]">
        <div className="p-6 sm:p-10">
          <div role="tablist" aria-label="Choose a location" className={`mb-8 inline-flex rounded-sm bg-ivory-200 p-1 ${list.length < 2 ? "hidden" : ""}`}>
            {list.map((l, i) => (
              <button
                key={l.id}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`relative min-h-11 rounded-sm px-5 text-sm font-medium transition-colors ${i === active ? 'text-ivory-50' : 'text-forest-900 hover:text-gold-700'}`}
              >
                {i === active && (
                  <motion.span layoutId="loc-pill" className="absolute inset-0 rounded-sm bg-forest-900" transition={{ duration: 0.5, ease }} />
                )}
                <span className="relative">{l.city}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease }}
            >
              <h3 className="text-3xl text-forest-900 sm:text-4xl">{loc.name}</h3>
              <address className="mt-3 not-italic text-muted">
                {loc.street}<br />{loc.cityLine}
              </address>
              <p className="mt-3">
                <a href={site.phoneHref} className="font-medium text-forest-900 hover:text-gold-700">{site.phone}</a>
              </p>

              <dl className="mt-8 divide-y divide-forest-900/10 border-y border-forest-900/10 text-sm">
                {order.map((d) => {
                  const h = site.hours[d];
                  const isToday = d === today;
                  return (
                    <div key={h.day} className={`flex justify-between py-2.5 ${isToday ? 'font-medium text-forest-900' : 'text-muted'}`}>
                      <dt>{h.day}{isToday && <span className="ml-2 rounded-sm bg-gold-500/20 px-2 py-0.5 text-[10px] uppercase tracking-wider text-gold-700">Today</span>}</dt>
                      <dd className={h.time === 'Closed' ? 'text-muted/70' : ''}>{h.time}</dd>
                    </div>
                  );
                })}
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={dir} target="_blank" rel="noopener noreferrer" className="btn-dark">Get Directions</a>
                <a href="/contact" className="btn-outline">Book Here</a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative min-h-[360px] bg-ivory-200 lg:min-h-full">
          <iframe
            key={loc.id}
            title={`Map of ${loc.name} office`}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0 grayscale-[30%] contrast-[1.05]"
          />
        </div>
      </div>
    </MotionRoot>
  );
}
