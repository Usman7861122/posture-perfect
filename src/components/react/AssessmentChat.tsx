import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MotionRoot from '../../lib/MotionRoot';
import { ease } from '../../lib/motion';

/*
  "Free AI Assessment" chat: LAYOUT ONLY.
  The chat service is not connected yet. When you get the script / embed code:
    1. Put the embed URL in CHAT_EMBED_URL below. The panel will then show it in place of the placeholder.
       (or replace the <Placeholder /> block with your own chat component)
    2. Remove the "not connected" note.
  Nothing is sent anywhere from this component today.
*/
const CHAT_EMBED_URL = ''; // example: 'https://your-chat-service.example/embed/chat?siteId=...'

const modes = ['Standard', 'Fast', 'Coaching'] as const;

const Icon = ({ d, className = 'h-5 w-5' }: { d: string; className?: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
);

function Placeholder() {
  return (
    <div className="flex-1 space-y-3 overflow-y-auto bg-ivory-100 p-5">
      <p className="bg-ivory-200/70 px-3 py-2 text-xs leading-snug text-muted">I’m an AI trained to provide PPWC support, for educational purposes only.</p>
      <div className="max-w-[88%] border border-forest-900/10 bg-ivory-50 px-4 py-3 text-[15px] leading-relaxed text-forest-900">
        I can help you understand what might be going on before you book. Where are you feeling discomfort?
      </div>
      <div className="flex flex-wrap gap-2 pt-1">
        {['Neck', 'Upper back', 'Lower back', 'Shoulder', 'Hip or leg', 'Knee'].map((c) => (
          <span key={c} className="border border-forest-900/20 bg-ivory-50 px-3 py-1.5 text-sm text-forest-900">{c}</span>
        ))}
      </div>
      <p className="pt-3 text-xs text-muted">Chat is not connected yet. To book now, call <a href="tel:+19727920204" className="text-forest-900 underline underline-offset-4">972-792-0204</a>.</p>
    </div>
  );
}

export default function AssessmentChat() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<(typeof modes)[number]>('Standard');
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); btn.current?.focus(); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <MotionRoot>
      <AnimatePresence>
        {open && (
          <motion.section
            key="chat"
            role="dialog"
            aria-label="AI Pain Assessment"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.45, ease }}
            className="fixed bottom-24 right-3 z-[60] flex h-[min(620px,calc(100dvh-8rem))] w-[calc(100vw-1.5rem)] max-w-[400px] flex-col overflow-hidden border border-gold-500/50 bg-ivory-50 shadow-[0_30px_80px_-20px_rgba(7,26,21,0.6)] sm:right-6"
          >
            <header className="flex items-center justify-between bg-forest-950 px-5 py-4 text-ivory-50">
              <span className="font-serif text-xl">AI Pain Assessment</span>
              <button type="button" onClick={() => { setOpen(false); btn.current?.focus(); }} aria-label="Close chat" className="flex h-9 w-9 items-center justify-center border border-ivory-50/25 text-lg leading-none hover:border-gold-400">×</button>
            </header>

            <div className="flex items-center justify-between gap-3 border-b border-forest-900/10 bg-ivory-50 px-5 py-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-forest-900 text-gold-300"><Icon d="M6 3v6a4 4 0 008 0V3M10 13v3a4 4 0 008 0v-1M18 12a2 2 0 100-4 2 2 0 000 4z" /></span>
                <span>
                  <span className="block text-sm font-medium text-forest-900">AI Pain Assessment</span>
                  <span className="flex items-center gap-1.5 text-xs text-muted"><span className="h-1.5 w-1.5 bg-gold-500" />Idle</span>
                </span>
              </div>
              <div role="tablist" aria-label="Chat mode" className="flex border border-forest-900/15 bg-ivory-200 p-0.5">
                {modes.map((m) => (
                  <button key={m} role="tab" aria-selected={mode === m} onClick={() => setMode(m)} className={`px-2.5 py-1.5 text-xs transition-colors ${mode === m ? 'bg-forest-900 text-ivory-50' : 'text-forest-900 hover:text-gold-700'}`}>{m}</button>
                ))}
              </div>
            </div>

            {CHAT_EMBED_URL ? (
              <iframe title="AI Pain Assessment" src={CHAT_EMBED_URL} className="w-full flex-1 border-0" allow="microphone" />
            ) : (
              <>
                <Placeholder />
                <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 border-t border-forest-900/10 bg-ivory-50 p-3">
                  <input type="text" disabled placeholder="Type or tap the mic…" aria-label="Type your message" className="min-w-0 flex-1 border border-forest-900/20 bg-ivory-50 px-4 py-3 text-sm placeholder:text-forest-900/50 disabled:cursor-not-allowed" />
                  <button type="button" disabled aria-label="Read answers aloud" className="flex h-11 w-11 shrink-0 items-center justify-center bg-forest-900 text-gold-300 opacity-60"><Icon d="M4 9v6h4l5 4V5L8 9H4zM16.5 8.5a5 5 0 010 7" /></button>
                  <button type="button" disabled aria-label="Speak" className="flex h-11 w-11 shrink-0 items-center justify-center bg-forest-900 text-gold-300 opacity-60"><Icon d="M12 15a3 3 0 003-3V6a3 3 0 00-6 0v6a3 3 0 003 3zM6 11a6 6 0 0012 0M12 17v4" /></button>
                  <button type="submit" disabled aria-label="Send" className="flex h-11 w-11 shrink-0 items-center justify-center bg-ivory-300 text-forest-900/60"><Icon d="M4 12l16-8-6 16-3-7-7-1z" /></button>
                </form>
              </>
            )}
          </motion.section>
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 right-3 z-[60] sm:right-6">
      <button
        ref={btn}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="btn-gold btn-book !px-6 !py-3.5 text-sm shadow-[0_18px_40px_-12px_rgba(7,26,21,0.55)]"
      >
        <span className="inline-flex items-center gap-2"><Icon className="h-4 w-4" d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z" />{open ? 'Close chat' : 'Free AI Assessment'}</span>
      </button>
      </div>
    </MotionRoot>
  );
}
