import { Link, NavLink } from 'react-router-dom';
import { Download, Phone, Mail, FileText } from 'lucide-react';
import { programs } from '../../data/programs';
import { site } from '../../data/site';

export default function Sidebar({ sections = [] }) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-28">
      {sections.length > 0 && (
        <div className="card overflow-hidden">
          <h2 className="bg-brand-700 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white">On this page</h2>
          <ul className="divide-y divide-slate-100 text-sm">
            {sections.map((s) => (
              <li key={s.id}><a href={`#${s.id}`} className="block px-5 py-2.5 text-slate-600 hover:bg-brand-50 hover:text-brand-700">{s.label}</a></li>
            ))}
          </ul>
        </div>
      )}

      <div className="card overflow-hidden">
        <h2 className="bg-accent-600 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h2>
        <ul className="divide-y divide-slate-100 text-sm">
          {programs.map((p) => (
            <li key={p.slug}>
              <NavLink to={`/programmes/${p.slug}`} className={({ isActive }) => `block px-5 py-2.5 ${isActive ? 'bg-accent-50 font-semibold text-accent-700' : 'text-slate-600 hover:bg-brand-50 hover:text-brand-700'}`}>
                {p.code} – {p.name}
              </NavLink>
            </li>
          ))}
          <li><Link to="/admissions#scholarships" className="block px-5 py-2.5 text-slate-600 hover:bg-brand-50">Scholarships & Financial Aid</Link></li>
          <li><Link to="/admissions#documents" className="block px-5 py-2.5 text-slate-600 hover:bg-brand-50">Documents Checklist</Link></li>
        </ul>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-brand-700 to-brand-900 p-6 text-white">
        <FileText className="text-saffron-400" aria-hidden />
        <h2 className="mt-3 text-lg font-semibold text-white">Admissions 2026-27 are open</h2>
        <p className="mt-1 text-sm text-white/75">Apply online in 10 minutes, or download the prospectus.</p>
        <div className="mt-5 flex flex-col gap-2">
          <Link to="/apply" className="btn-primary">Apply Online</Link>
          <Link to="/enquire" className="btn-outline"><Download size={16} aria-hidden /> Request Prospectus</Link>
        </div>
      </div>

      <div className="card p-5 text-sm">
        <h2 className="text-base font-semibold">Admission Helpdesk</h2>
        <p className="mt-3 flex items-center gap-2 text-slate-600"><Phone size={15} className="text-accent-600" aria-hidden /> {site.phones.admissions}</p>
        <a href={`mailto:${site.emails.admissions}`} className="mt-2 flex items-center gap-2 break-all text-slate-600 hover:text-brand-700"><Mail size={15} className="shrink-0 text-accent-600" aria-hidden /> {site.emails.admissions}</a>
        <p className="mt-2 text-xs text-slate-500">{site.hours}</p>
      </div>
    </aside>
  );
}
