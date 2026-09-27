import { Briefcase, FileSearch, MessagesSquare, Handshake, Presentation, UserCheck } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import Seo from '../components/layout/Seo';
import Section from '../components/ui/Section';
import DataTable from '../components/ui/DataTable';
import StatCounter from '../components/ui/StatCounter';
import CTABanner from '../components/ui/CTABanner';
import { images } from '../data/images';
import { site } from '../data/site';

const steps = [
  { icon: UserCheck, title: 'Registration', text: 'Final-year students register with the Training & Placement Cell.' },
  { icon: Presentation, title: 'Skill Training', text: 'Aptitude, GMP, communication and interview workshops.' },
  { icon: FileSearch, title: 'Pre-Placement Talks', text: 'Companies present their roles, culture and career paths.' },
  { icon: MessagesSquare, title: 'Selection Rounds', text: 'Written test, technical interview and HR round.' },
  { icon: Handshake, title: 'Offer & Joining', text: 'Offer letters are issued, and the cell supports onboarding.' },
];

// PLACEHOLDER figures and recruiter names; replace with actual placement data.
const yearly = [
  ['2025-26', '118', '109', '92%', '₹ 4.2 LPA', '₹ 9.5 LPA'],
  ['2024-25', '112', '101', '90%', '₹ 3.9 LPA', '₹ 8.8 LPA'],
  ['2023-24', '105', '93', '89%', '₹ 3.6 LPA', '₹ 8.0 LPA'],
];

const recruiters = ['Zydus Lifesciences', 'Torrent Pharma', 'Intas Pharmaceuticals', 'Cadila Pharmaceuticals', 'Sun Pharma', 'Alembic', 'Dr. Reddy’s', 'Lupin', 'Cipla', 'Troikaa', 'Amneal', 'Apollo Pharmacy', 'IQVIA', 'Parexel', 'Sterling Hospitals', 'Accord Healthcare'];

export default function Placements() {
  return (
    <>
      <Seo title="Placements" description="Placement record, recruiters and the training and placement process at Pharma Med University, Ahmedabad." path="/placements" />
      <PageHero title="Training & Placements" subtitle="Connecting talent with India’s leading pharma and healthcare organisations." image={images.graduates} crumbs={[{ label: 'Placements' }]} />

      <section className="bg-slate-50 py-14">
        <div className="container-x grid grid-cols-2 gap-10 lg:grid-cols-4">
          {[
            { value: 92, suffix: '%', label: 'Placement Rate (2025-26)' },
            { value: 80, suffix: '+', label: 'Recruiting Companies' },
            { value: 9, suffix: '.5 LPA', label: 'Highest Package' },
            { value: 150, suffix: '+', label: 'Internships Every Year' },
          ].map((s) => <StatCounter key={s.label} {...s} />)}
        </div>
      </section>

      <Section eyebrow="Our Track Record" title="Year-wise Placement Statistics">
        <DataTable columns={['Batch', 'Eligible', 'Placed', 'Placement %', 'Average Package', 'Highest Package']} rows={yearly} caption="Placement statistics" />
      </Section>

      <Section className="bg-slate-50" eyebrow="How It Works" title="The Placement Process" center>
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="card relative p-5 text-center">
              <span className="absolute right-3 top-3 font-heading text-3xl font-bold text-slate-100">{i + 1}</span>
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-white"><Icon size={22} aria-hidden /></span>
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Our Recruiters" title="Where our graduates work" center>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {recruiters.map((r) => (
            <li key={r} className="flex h-16 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-center font-heading text-sm font-semibold text-slate-600">{r}</li>
          ))}
        </ul>
      </Section>

      <section className="bg-brand-800 py-14">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <Briefcase className="mt-1 shrink-0 text-saffron-400" size={32} aria-hidden />
            <div>
              <h2 className="text-2xl font-bold text-white">Hiring pharmacy talent?</h2>
              <p className="mt-1 text-white/75">Invite Pharma Med University to your next campus drive. Contact {site.placementOfficer.name}, {site.placementOfficer.title}.</p>
            </div>
          </div>
          <a href={`mailto:${site.emails.placements}`} className="btn-primary px-7 py-3">{site.emails.placements}</a>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
