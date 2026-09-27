import { Link, useParams } from 'react-router-dom';
import { CalendarDays, Clock, Users, ShieldCheck, Briefcase, ArrowRight, BookOpen } from 'lucide-react';
import PageHero from '../../components/layout/PageHero';
import Seo from '../../components/layout/Seo';
import Sidebar from '../../components/layout/Sidebar';
import AccreditationStrip, { CheckList } from '../../components/ui/AccreditationStrip';
import { Block } from '../../components/ui/Section';
import DataTable from '../../components/ui/DataTable';
import Tabs from '../../components/ui/Tabs';
import Accordion from '../../components/ui/Accordion';
import CTABanner from '../../components/ui/CTABanner';
import EnquiryForm from '../../components/forms/EnquiryForm';
import { getProgram } from '../../data/programs';
import NotFound from '../NotFound';

const highlightIcons = [Clock, Users, ShieldCheck, CalendarDays];

export default function ProgramPage() {
  const { slug } = useParams();
  const p = getProgram(slug);
  if (!p) return <NotFound />;

  const sections = [
    { id: 'overview', label: 'Programme Overview' },
    { id: 'seats', label: 'Intake & Seat Allocation' },
    { id: 'dates', label: 'Important Dates' },
    { id: 'fees', label: `Fee Structure ${p.fees.year}` },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'process', label: 'Admission Process' },
    { id: 'merit', label: 'Merit List' },
    p.international && { id: 'international', label: 'International Students' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'careers', label: 'Career Opportunities' },
    { id: 'faqs', label: 'FAQs' },
  ].filter(Boolean);

  return (
    <>
      <Seo
        title={`${p.name} (${p.code}) Admission 2026-27`}
        description={`${p.name} (${p.code}) at Pharma Med University, Ahmedabad: ${p.duration}, ${p.intake} seats, ${p.approval}. Eligibility, fees, important dates and admission process.`}
        path={`/programmes/${p.slug}`}
      />
      <PageHero
        title={`${p.name} (${p.code})`}
        subtitle={p.tagline}
        image={p.image}
        crumbs={[{ label: 'Admissions & Aid', to: '/admissions' }, { label: p.level }, { label: p.code }]}
      >
        {p.admissionOpen && (
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" /> {p.code} Admissions 2026 – Open
          </span>
        )}
        <Link to={`/apply?program=${encodeURIComponent(p.code)}`} className="btn-primary">Apply Now <ArrowRight size={16} /></Link>
        <Link to={`/enquire?program=${encodeURIComponent(p.code)}`} className="btn-outline">Download Prospectus</Link>
      </PageHero>
      <AccreditationStrip />

      <div className="container-x grid gap-10 py-12 lg:grid-cols-[1fr_320px]">
        <div className="min-w-0 space-y-14">
          <Block id="overview" title="Programme Overview">
            <div className="prose-body">{p.overview.map((t) => <p key={t.slice(0, 20)}>{t}</p>)}</div>
            <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {p.highlights.map((h, i) => {
                const Icon = highlightIcons[i % highlightIcons.length];
                return (
                  <li key={h.label} className="card p-4">
                    <Icon size={20} className="text-accent-600" aria-hidden />
                    <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">{h.label}</p>
                    <p className="font-heading font-semibold text-brand-800">{h.value}</p>
                  </li>
                );
              })}
            </ul>
          </Block>

          <Block id="seats" title="Intake & Seat Allocation">
            {p.seatMatrix.note && <p className="mb-4 text-slate-600">{p.seatMatrix.note}</p>}
            <DataTable columns={p.seatMatrix.columns} rows={p.seatMatrix.rows} caption="Seat allocation" />
          </Block>

          <Block id="dates" title="Important Dates">
            <div className="grid gap-6 2xl:grid-cols-2">
              {p.dates.map((d) => (
                <div key={d.title}>
                  <h3 className="mb-3 text-base font-semibold text-brand-700">{d.title}</h3>
                  <DataTable columns={['Activity', 'Date']} rows={d.rows} caption={d.title} />
                </div>
              ))}
            </div>
          </Block>

          <Block id="fees" title={`Fee Structure (${p.fees.year})`}>
            <h3 className="mb-3 text-base font-semibold text-brand-700">Tuition Fee</h3>
            <DataTable columns={p.fees.tuition.columns} rows={p.fees.tuition.rows} caption="Tuition fee" />
            <h3 className="mb-3 mt-6 text-base font-semibold text-brand-700">Other Fees</h3>
            <DataTable columns={p.fees.other.columns} rows={p.fees.other.rows} caption="Other fees" />
            {p.fees.note && <p className="mt-3 text-xs text-slate-500">* {p.fees.note}</p>}
          </Block>

          <Block id="eligibility" title="Eligibility Criteria">
            <div className="grid gap-5 md:grid-cols-2">
              {p.eligibility.map((e) => (
                <div key={e.title} className="card p-5">
                  <h3 className="mb-3 text-base font-semibold text-brand-700">{e.title}</h3>
                  <CheckList items={e.items} />
                </div>
              ))}
            </div>
          </Block>

          <Block id="process" title="Admission Process">
            <ol className="relative space-y-6 border-l-2 border-accent-500/30 pl-8">
              {p.process.map((s, i) => (
                <li key={s.title} className="relative">
                  <span className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-white">{i + 1}</span>
                  <h3 className="font-sans text-base font-semibold text-brand-800">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{s.text}</p>
                </li>
              ))}
            </ol>
          </Block>

          <Block id="merit" title="Merit List Preparation">
            <DataTable columns={['Category', 'Basis of Merit']} rows={p.merit.map((m) => [m.category, m.formula])} caption="Merit criteria" />
          </Block>

          {p.international && (
            <Block id="international" title="International Students">
              <p className="mb-4 text-slate-600">{p.international.intro}</p>
              <DataTable columns={p.international.columns} rows={p.international.rows} caption="International seats" />
            </Block>
          )}

          <Block id="curriculum" title="Curriculum">
            <p className="mb-5 flex items-center gap-2 text-sm text-slate-600">
              <BookOpen size={16} className="text-accent-600" aria-hidden /> Follows the latest Pharmacy Council of India (PCI) regulations.
            </p>
            <Tabs
              tabs={p.syllabus.map((s) => ({
                label: s.term,
                content: <DataTable columns={['Code', 'Subject', 'Type', 'Credits']} rows={s.subjects} caption={`${s.term} subjects`} />,
              }))}
            />
          </Block>

          <Block id="careers" title="Career Opportunities">
            <ul className="grid gap-3 sm:grid-cols-2">
              {p.careers.map((c) => (
                <li key={c} className="flex items-center gap-3 rounded-lg bg-brand-50 px-4 py-3 text-sm font-medium text-brand-800">
                  <Briefcase size={16} className="shrink-0 text-accent-600" aria-hidden /> {c}
                </li>
              ))}
            </ul>
          </Block>

          <Block id="faqs" title="Frequently Asked Questions">
            <Accordion items={p.faqs} />
          </Block>

          <div className="card border-t-4 border-t-saffron-500 p-6">
            <h2 className="text-xl font-bold">Have a question about {p.code}?</h2>
            <p className="mb-5 mt-1 text-sm text-slate-600">Leave your details and an admission counsellor will call you back.</p>
            <EnquiryForm key={p.slug} defaultProgram={p.code} />
          </div>
        </div>

        <Sidebar sections={sections} />
      </div>
      <CTABanner />
    </>
  );
}
