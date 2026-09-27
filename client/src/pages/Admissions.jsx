import { Link } from 'react-router-dom';
import { ArrowRight, Bell, FileCheck2, IndianRupee, ClipboardList } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import Seo from '../components/layout/Seo';
import Section from '../components/ui/Section';
import DataTable from '../components/ui/DataTable';
import CTABanner from '../components/ui/CTABanner';
import { CheckList } from '../components/ui/AccreditationStrip';
import { programs } from '../data/programs';
import { images } from '../data/images';
import { notices } from '../data/site';

const scholarships = [
  ['Mukhyamantri Yuva Swavalamban Yojana (MYSY)', 'Gujarat domicile students with 80+ percentile in 12th and family income under ₹ 6 lakh', 'Up to 50% of tuition fees'],
  ['Digital Gujarat Post-Matric Scholarship', 'SC / ST / SEBC / EWS students as per state norms', 'As per Government of Gujarat'],
  ['Central Sector Scholarship', 'Top 20 percentile of the board with family income under ₹ 4.5 lakh', '₹ 12,000 – ₹ 20,000 per year'],
  ['PMU Merit Scholarship', 'Top 3 rank holders of each year', '25% – 50% tuition waiver'],
  ['PMU Sibling / Single Girl Child Concession', 'Siblings studying at PMU, or a single girl child', '10% tuition concession'],
  ['AICTE PG Scholarship', 'GPAT-qualified M.Pharm students', '₹ 12,400 per month'],
];

const documents = [
  '10th (SSC) mark sheet and passing certificate',
  '12th (HSC) mark sheet and passing certificate',
  'GUJCET / NEET / JEE / GPAT scorecard (as applicable)',
  'School Leaving Certificate (LC)',
  'Caste certificate and non-creamy layer certificate (if applicable)',
  'EWS certificate (if applicable)',
  'Aadhaar card',
  'Domicile certificate (for Gujarat quota)',
  'Passport, visa and NRI status proof (for NRI / international candidates)',
  'Equivalence certificate from AIU (for foreign board students)',
  'Six recent passport-size photographs',
  'Gap certificate / affidavit (if applicable)',
];

export default function Admissions() {
  return (
    <>
      <Seo title="Admissions 2026-27" description="Admission process, ACPC and GUJCET guidance, scholarships and documents checklist for B.Pharm, M.Pharm, Pharm.D and D.Pharm at Pharma Med University." path="/admissions" />
      <PageHero title="Admissions & Aid 2026-27" subtitle="Everything you need to know about joining Pharma Med University, all in one place." image={images.heroStudents} crumbs={[{ label: 'Admissions & Aid' }]}>
        <Link to="/apply" className="btn-primary">Apply Online <ArrowRight size={16} /></Link>
        <Link to="/enquire" className="btn-outline">Talk to a Counsellor</Link>
      </PageHero>

      <Section eyebrow="Programmes Offered" title="Choose your programme">
        <DataTable
          columns={['Programme', 'Level', 'Duration', 'Intake', 'Admission Through']}
          rows={programs.map((p) => [
            <Link key={p.slug} to={`/programmes/${p.slug}`} className="font-semibold text-brand-700 hover:text-accent-600">{p.name} ({p.code})</Link>,
            p.level,
            p.duration,
            p.intake,
            p.highlights.find((h) => h.label === 'Admission via')?.value,
          ])}
          caption="Programmes offered"
        />
      </Section>

      <section className="bg-slate-50 py-16">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {[
            { icon: ClipboardList, title: 'ACPC Seats (Gujarat Quota)', text: 'Most seats for Gujarat students are filled through the centralised ACPC process. Register on the ACPC portal after your 12th results, fill in your choices and pick Pharma Med University.' },
            { icon: FileCheck2, title: 'Institute-Level Seats', text: 'NRI, NRI-Sponsored, international and vacant seats are filled directly by the university through our online application portal, on merit.' },
            { icon: IndianRupee, title: 'Education Loans', text: 'We work with SBI, Bank of Baroda and other banks to help students get education loans quickly. Our accounts office will help you with the paperwork.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-6">
              <Icon className="text-accent-600" aria-hidden />
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <Section id="notices" eyebrow="Stay Updated" title="Important Notices">
        <ul className="divide-y divide-slate-200 rounded-lg border border-slate-200">
          {notices.map((n) => (
            <li key={n} className="flex items-start gap-3 px-5 py-4 text-sm text-slate-700">
              <Bell size={16} className="mt-0.5 shrink-0 text-saffron-600" aria-hidden /> {n}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="scholarships" className="bg-slate-50" eyebrow="Financial Aid" title="Scholarships & Fee Concessions" intro="Money should never stand between a deserving student and a pharmacy education. Here are the main scholarships available to our students.">
        <DataTable columns={['Scholarship', 'Eligibility', 'Benefit']} rows={scholarships} caption="Scholarships" />
        <p className="mt-3 text-xs text-slate-500">* Government scholarships are subject to the rules of the respective authorities in force at the time.</p>
      </Section>

      <Section id="documents" eyebrow="Be Prepared" title="Documents Checklist" intro="Bring the originals and two self-attested photocopies of each document for verification at the time of admission.">
        <div className="card p-6 md:columns-2 md:gap-10">
          <CheckList items={documents} />
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
