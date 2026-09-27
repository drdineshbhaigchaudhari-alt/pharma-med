import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { nav } from '../../data/site';

function DesktopItem({ item }) {
  const [open, setOpen] = useState(false);
  const base = 'flex items-center gap-1 whitespace-nowrap px-2 py-7 2xl:px-3 text-sm font-medium transition-colors';
  const cls = ({ isActive }) => `${base} ${isActive ? 'text-accent-600' : 'text-brand-800 hover:text-accent-600'}`;

  if (!item.children) return <NavLink to={item.to} end={item.to === '/'} className={cls}>{item.label}</NavLink>;

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className={`${base} text-brand-800 hover:text-accent-600`}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
      >
        {item.label} <ChevronDown size={14} aria-hidden className={`transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul className="absolute left-0 top-full z-50 w-72 overflow-hidden rounded-b-lg border-t-2 border-accent-500 bg-white py-2 shadow-xl">
          {item.children.map((c) => (
            <li key={c.to}>
              <Link to={c.to} onClick={() => setOpen(false)} className="block px-5 py-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700">
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setMobileOpen(false), [location]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 bg-white transition-shadow ${scrolled ? 'shadow-md' : 'border-b border-slate-100'}`}>
      <div className="container-x flex items-center justify-between gap-4">
        <div className="py-3"><Logo /></div>

        <nav aria-label="Main" className="hidden items-center xl:flex">
          {nav.map((item) => <DesktopItem key={item.label} item={item} />)}
          <Link to="/apply" className="btn-primary ml-3 whitespace-nowrap">Apply Now</Link>
        </nav>

        <button type="button" className="rounded p-2 text-brand-800 xl:hidden" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen((o) => !o)}>
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <nav aria-label="Mobile" className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-100 bg-white xl:hidden">
          <ul className="container-x py-3">
            {nav.map((item) => (
              <li key={item.label} className="border-b border-slate-100 last:border-0">
                {item.children ? (
                  <>
                    <button type="button" className="flex w-full items-center justify-between py-3 text-left font-medium text-brand-800" aria-expanded={expanded === item.label} onClick={() => setExpanded((e) => (e === item.label ? null : item.label))}>
                      {item.label} <ChevronDown size={16} className={`transition ${expanded === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {expanded === item.label && (
                      <ul className="pb-2 pl-4">
                        {item.children.map((c) => (
                          <li key={c.to}><Link to={c.to} className="block py-2 text-sm text-slate-600">{c.label}</Link></li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={item.to} className="block py-3 font-medium text-brand-800">{item.label}</Link>
                )}
              </li>
            ))}
            <li className="pt-3"><Link to="/apply" className="btn-primary w-full">Apply Now</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
