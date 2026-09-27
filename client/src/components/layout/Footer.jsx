import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Logo from './Logo';
import { site } from '../../data/site';
import { programs } from '../../data/programs';

const cols = [
  {
    title: 'Quick Links',
    links: [
      ['About PMU', '/about'],
      ['Admissions 2026-27', '/admissions'],
      ['Scholarships', '/admissions#scholarships'],
      ['Placements', '/placements'],
      ['Research', '/research'],
      ['Contact Us', '/contact'],
    ],
  },
  {
    title: 'Student Corner',
    links: [
      ['Campus Life', '/campus-life'],
      ['Library', '/campus-life#library'],
      ['Hostel', '/campus-life#hostel'],
      ['Academic Calendar', '/admissions#notices'],
      ['Enquire Now', '/enquire'],
      ['Apply Online', '/apply'],
    ],
  },
];

export default function Footer() {
  const social = [
    [Facebook, site.social.facebook, 'Facebook'],
    [Instagram, site.social.instagram, 'Instagram'],
    [Linkedin, site.social.linkedin, 'LinkedIn'],
    [Youtube, site.social.youtube, 'YouTube'],
  ];
  return (
    <footer className="bg-brand-900 text-sm text-white/75">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1.2fr_1fr_1fr_1.4fr]">
        <div>
          <Logo light />
          <p className="mt-5 leading-relaxed">
            A PCI-approved centre for pharmaceutical education and research in the heart of Ahmedabad, dedicated to shaping ethical,
            skilled and compassionate pharmacy professionals since {site.established}.
          </p>
          <div className="mt-5 flex gap-3">
            {social.map(([Icon, href, label]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="rounded-full bg-white/10 p-2 hover:bg-accent-500 hover:text-white">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-base font-semibold text-white">Programmes</h3>
          <ul className="space-y-2.5">
            {programs.map((p) => (
              <li key={p.slug}><Link to={`/programmes/${p.slug}`} className="hover:text-saffron-400">{p.name} ({p.code})</Link></li>
            ))}
            <li><Link to="/research" className="hover:text-saffron-400">Doctoral Programme (Ph.D)</Link></li>
          </ul>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="mb-4 text-base font-semibold text-white">{c.title}</h3>
            <ul className="space-y-2.5">
              {c.links.map(([l, to]) => <li key={l}><Link to={to} className="hover:text-saffron-400">{l}</Link></li>)}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="mb-4 text-base font-semibold text-white">Reach Us</h3>
          <ul className="space-y-3.5">
            <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-accent-500" aria-hidden /><span>{site.address.full}</span></li>
            <li className="flex gap-3"><Phone size={18} className="shrink-0 text-accent-500" aria-hidden /><a href={`tel:${site.phones.admissions.replace(/\s/g, '')}`} className="hover:text-white">{site.phones.admissions}</a></li>
            <li className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-accent-500" aria-hidden /><span className="space-y-1">
              <a href={`mailto:${site.emails.info}`} className="block break-all hover:text-white">{site.emails.info}</a>
              <a href={`mailto:${site.emails.admissions}`} className="block break-all hover:text-white">{site.emails.admissions}</a>
            </span></li>
            <li className="flex gap-3"><Clock size={18} className="shrink-0 text-accent-500" aria-hidden /><span>{site.hours}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Pharma Med University. All rights reserved.</p>
          <p className="flex gap-4">
            <Link to="/contact" className="hover:text-white">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white">Disclaimer</Link>
            <Link to="/contact" className="hover:text-white">Terms of Use</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
