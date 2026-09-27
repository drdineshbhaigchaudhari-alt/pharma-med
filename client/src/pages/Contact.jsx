import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import Seo from '../components/layout/Seo';
import ContactForm from '../components/forms/ContactForm';
import { images } from '../data/images';
import { site } from '../data/site';

export default function Contact() {
  const cards = [
    { icon: MapPin, title: 'Campus Address', lines: [site.address.line1, `${site.address.line2}, ${site.address.city}`, `${site.address.state} ${site.address.pin}`] },
    { icon: Phone, title: 'Phone', lines: [`Admissions: ${site.phones.admissions}`, `Office: ${site.phones.office}`, `Mobile: ${site.phones.mobile}`] },
    { icon: Mail, title: 'Email', emails: [['Admissions (Registrar)', site.emails.admissions], ['General Enquiries', site.emails.info], ['Placements', site.emails.placements], ['Careers at PMU (HR)', site.emails.hr]] },
    { icon: Clock, title: 'Office Hours', lines: [site.hours, 'Closed on Sundays & public holidays'] },
  ];
  return (
    <>
      <Seo title="Contact Us" description={`Contact Pharma Med University, ${site.address.full}. Phone ${site.phones.admissions}.`} path="/contact" />
      <PageHero title="Contact Us" subtitle="We’re happy to help. Reach out with any question about admissions, programmes or campus life." image={images.campusStudy} crumbs={[{ label: 'Contact' }]} />

      <section className="py-16">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, lines, emails }) => (
            <div key={title} className="card p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-50 text-accent-600"><Icon aria-hidden /></span>
              <h2 className="mt-4 text-base font-semibold">{title}</h2>
              {lines && <ul className="mt-2 space-y-1 break-words text-sm text-slate-600">{lines.map((l) => <li key={l}>{l}</li>)}</ul>}
              {emails && (
                <ul className="mt-2 space-y-2 text-sm">
                  {emails.map(([label, e]) => (
                    <li key={e}>
                      <span className="block text-xs text-slate-500">{label}</span>
                      <a href={`mailto:${e}`} className="break-all text-brand-700 hover:text-accent-600">{e}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="container-x mt-12 grid gap-8 lg:grid-cols-2">
          <div className="card p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <p className="mb-6 mt-1 text-sm text-slate-600">We usually reply within one working day.</p>
            <ContactForm />
          </div>
          <iframe title="Pharma Med University location on Google Maps" src={site.mapEmbed} className="h-[420px] w-full rounded-xl border-0 lg:h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </>
  );
}
