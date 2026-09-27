import { BadgeCheck } from 'lucide-react';
import { approvals } from '../../data/site';

export default function AccreditationStrip() {
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <ul className="container-x grid grid-cols-2 gap-4 py-6 sm:grid-cols-3 lg:grid-cols-6">
        {approvals.map((a) => (
          <li key={a.short} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-brand-700 bg-white text-[11px] font-bold text-brand-700">
              {a.short}
            </span>
            <span className="text-xs leading-snug text-slate-600">{a.long}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CheckList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it) => (
        <li key={it} className="flex gap-3 text-sm leading-relaxed text-slate-600">
          <BadgeCheck size={18} className="mt-0.5 shrink-0 text-accent-500" aria-hidden />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
