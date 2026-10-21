import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';
import { site } from '../../data/site';
import { team } from '../../data/content';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const field =
  'mt-2 min-h-12 w-full rounded-sm border border-forest-900/20 bg-ivory-50 px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      // TODO: connect a real endpoint (Formspree, Resend, or an Astro API route).
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <MotionRoot>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="rounded-sm bg-forest-900 p-10 text-center text-ivory-100">
          <p className="font-serif text-4xl text-ivory-50">Thank you.</p>
          <p className="mt-3 text-ivory-200/80">We received your request and will call you soon to confirm your visit.</p>
        </motion.div>
      </MotionRoot>
    );
  }

  return (
    <MotionRoot>
      <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-forest-900">
          Full name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="text-sm font-medium text-forest-900">
          Phone
          <input name="phone" type="tel" required autoComplete="tel" className={field} />
        </label>
        <label className="text-sm font-medium text-forest-900 sm:col-span-2">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="text-sm font-medium text-forest-900">
          Location
          <select name="location" className={field} defaultValue={site.locations[0].id}>
            {site.locations.map((l) => (
              <option key={l.id} value={l.id}>{l.city}, {l.street}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-forest-900">
          Preferred provider
          <select name="provider" className={field} defaultValue="">
            <option value="">No preference</option>
            {team.map((m) => (
              <option key={m.name} value={m.name}>{m.name}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-forest-900 sm:col-span-2">
          How can we help?
          <textarea name="message" rows={4} className={field} placeholder="Tell us where it hurts and how long it has been going on." />
        </label>
        <div className="sm:col-span-2">
          <button type="submit" disabled={status === 'sending'} className="btn-dark w-full disabled:opacity-60 sm:w-auto">
            {status === 'sending' ? 'Sending…' : 'Request an Appointment'}
          </button>
          {status === 'error' && (
            <p role="alert" className="mt-4 text-sm text-red-700">
              Something went wrong. Please call us at {site.phone}.
            </p>
          )}
        </div>
      </form>
    </MotionRoot>
  );
}
