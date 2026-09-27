import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumb({ items = [], light = false }) {
  const all = [{ label: 'Home', to: '/' }, ...items];
  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-1 text-xs sm:text-sm ${light ? 'text-white/70' : 'text-slate-500'}`}>
        {all.map((c, i) => (
          <li key={c.label} className="flex items-center gap-1">
            {i > 0 && <ChevronRight size={14} aria-hidden />}
            {c.to && i < all.length - 1 ? (
              <Link to={c.to} className={light ? 'hover:text-white' : 'hover:text-brand-700'}>{c.label}</Link>
            ) : (
              <span aria-current="page" className={light ? 'text-saffron-400' : 'text-brand-700'}>{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
