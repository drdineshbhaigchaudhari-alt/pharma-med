import { Mail } from 'lucide-react';

const tints = ['#dbeafe', '#e0f2fe', '#dcfce7', '#fef3c7', '#ede9fe', '#fce7f3'];

// Illustrated doctor (white coat + stethoscope), shown until a photo is added.
function DoctorAvatar({ index }) {
  return (
    <svg viewBox="7 11 50 50" className="aspect-square w-full" aria-hidden>
      <rect width="64" height="64" fill={tints[index % tints.length]} />
      <path d="M8 64c0-13 10-20 24-20s24 7 24 20z" fill="#fff" stroke="#cbd5e1" />
      <path d="M26 44l6 10 6-10" fill="#063A23" />
      <path d="M22 45l10 19M42 45L32 64" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
      <path d="M24 46c-3 6 0 12 5 12" stroke="#334155" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="29" cy="58" r="2.5" fill="#334155" />
      <rect x="28" y="36" width="8" height="9" rx="3" fill="#c68a5a" />
      <circle cx="32" cy="27" r="11" fill="#c68a5a" />
      <path d="M21 25c0-8 5-12 11-12s11 4 11 12c-2-4-6-6-11-6s-9 2-11 6z" fill="#1f2937" />
    </svg>
  );
}

const cols = {
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

export default function FacultyGrid({ people, columns = 4 }) {
  return (
    <ul className={`grid gap-6 ${cols[columns]}`}>
      {people.map((f, i) => (
        <li key={f.name} className="card flex flex-col overflow-hidden">
          <figure className="relative">
            {f.photo ? (
              <img src={f.photo} alt={f.representative ? 'Representative image' : f.name} className="aspect-square w-full object-cover object-top" loading="lazy" />
            ) : (
              <DoctorAvatar index={i} />
            )}
            {f.representative && (
              <figcaption className="absolute bottom-2 right-2 rounded bg-black/55 px-2 py-0.5 text-[10px] font-medium text-white">Representative image</figcaption>
            )}
          </figure>
          <div className="flex-1 px-5 pb-4 pt-4">
            <h3 className="text-base font-semibold leading-snug">{f.name}</h3>
            {f.designation && <p className="mt-0.5 text-sm font-medium leading-snug text-accent-600">{f.designation}</p>}
            <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{f.qualifications}</p>
          </div>
          {f.email && (
            <a
              href={`mailto:${f.email}`}
              title={f.email}
              className="flex items-center gap-2 border-t border-slate-100 bg-slate-50 px-5 py-3 text-xs text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
            >
              <Mail size={16} className="shrink-0 text-accent-600" aria-hidden />
              {/* Split at "@" so the full address shows on two tidy lines instead of wrapping mid-word. */}
              <span className="min-w-0 leading-tight">
                <span className="block truncate font-medium">{f.email.split('@')[0]}</span>
                <span className="block truncate text-slate-400">@{f.email.split('@')[1]}</span>
              </span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
