import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-slate-200 rounded-lg border border-slate-200">
      {items.map((it, i) => (
        <div key={it.q}>
          <h3>
            <button
              type="button"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans text-sm font-semibold text-brand-800 hover:bg-slate-50 sm:text-base"
            >
              {it.q}
              {open === i ? <Minus size={18} className="shrink-0 text-accent-600" /> : <Plus size={18} className="shrink-0 text-accent-600" />}
            </button>
          </h3>
          {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{it.a}</p>}
        </div>
      ))}
    </div>
  );
}
