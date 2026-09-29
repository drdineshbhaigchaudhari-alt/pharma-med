import { Link } from 'react-router-dom';

// Official Pharma Med University logo (source: brand/pmu-logo-full.png).
// The badge text is too small to read at header size, so the name is repeated beside it in a matching serif.
export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Pharma Med University home">
      <span className={`shrink-0 ${light ? 'rounded-xl bg-white p-1.5' : ''}`}>
        <img
          src="/brand/pmu-logo-72.png"
          srcSet="/brand/pmu-logo-72.png 1x, /brand/pmu-logo-144.png 2x"
          width="72"
          height="72"
          alt="Pharma Med University logo"
          className="h-[60px] w-auto sm:h-[72px]"
        />
      </span>
      <span className="leading-none">
        <span className={`block font-brand text-[19px] font-bold tracking-wide sm:text-[22px] ${light ? 'text-white' : 'text-brand-800'}`}>
          Pharma <span className="text-gold">Med</span>
        </span>
        <span className={`mt-1 block font-brand text-[11px] font-semibold tracking-[0.34em] sm:text-[12.5px] ${light ? 'text-white/80' : 'text-brand-700'}`}>UNIVERSITY</span>
        {!light && (
          <span className="mt-1.5 hidden whitespace-nowrap text-[9.5px] uppercase tracking-[0.14em] text-slate-500 sm:block">
            Pharmaceutical Sciences · Ahmedabad
          </span>
        )}
      </span>
    </Link>
  );
}
