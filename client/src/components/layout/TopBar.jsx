import { Link } from 'react-router-dom';
import { Phone, Mail, Bell, CreditCard, MessageSquareText } from 'lucide-react';
import { site } from '../../data/site';

export default function TopBar() {
  return (
    <div className="bg-brand-900 text-xs text-white/85">
      <div className="container-x flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a href={`tel:${site.phones.admissions.replace(/\s/g, '')}`} className="inline-flex items-center gap-1.5 hover:text-white">
            <Phone size={13} aria-hidden /> {site.phones.admissions}
          </a>
          <a href={`mailto:${site.emails.admissions}`} className="hidden items-center gap-1.5 hover:text-white sm:inline-flex">
            <Mail size={13} aria-hidden /> {site.emails.admissions}
          </a>
        </div>
        <nav aria-label="Quick actions" className="flex items-center gap-4">
          <Link to="/admissions#notices" className="hidden items-center gap-1.5 hover:text-white md:inline-flex">
            <Bell size={13} aria-hidden /> Important Notice
          </Link>
          <Link to="/contact" className="hidden items-center gap-1.5 hover:text-white md:inline-flex">
            <CreditCard size={13} aria-hidden /> Online Fee Payment
          </Link>
          <Link to="/enquire" className="inline-flex items-center gap-1.5 rounded bg-accent-500 px-2.5 py-1 font-semibold text-white hover:bg-accent-600">
            <MessageSquareText size={13} aria-hidden /> Enquire Now
          </Link>
        </nav>
      </div>
    </div>
  );
}
