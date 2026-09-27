import { FlaskConical, Dna, Leaf, Brain, Atom, ShieldPlus } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import Seo from '../components/layout/Seo';
import Section from '../components/ui/Section';
import DataTable from '../components/ui/DataTable';
import StatCounter from '../components/ui/StatCounter';
import CTABanner from '../components/ui/CTABanner';
import { CheckList } from '../components/ui/AccreditationStrip';
import { images } from '../data/images';

const areas = [
  { icon: FlaskConical, title: 'Novel Drug Delivery', text: 'Nanoparticles, liposomes, transdermal and targeted delivery systems.' },
  { icon: Leaf, title: 'Herbal & Natural Products', text: 'Standardisation and validation of traditional Indian medicinal plants.' },
  { icon: Brain, title: 'Neuropharmacology', text: 'Pre-clinical models for anxiety, epilepsy and neurodegenerative disorders.' },
  { icon: Atom, title: 'Computer-Aided Drug Design', text: 'Molecular docking, QSAR and AI-assisted lead discovery.' },
  { icon: Dna, title: 'Pharmaceutical Biotechnology', text: 'Biologics, fermentation and recombinant protein studies.' },
  { icon: ShieldPlus, title: 'Pharmacovigilance', text: 'Adverse drug reaction monitoring in partnership with hospitals.' },
];

const phdRows = [
  ['Pharmaceutics', '4', 'Master’s degree in Pharmacy with 55% marks'],
  ['Pharmacology', '3', 'Master’s degree in Pharmacy with 55% marks'],
  ['Pharmaceutical Chemistry', '3', 'Master’s degree in Pharmacy with 55% marks'],
  ['Pharmacognosy', '2', 'Master’s degree in Pharmacy with 55% marks'],
];

export default function Research() {
  return (
    <>
      <Seo title="Research & Ph.D" description="Research areas, funded projects, publications and the Ph.D programme in Pharmaceutical Sciences at Pharma Med University, Ahmedabad." path="/research" />
      <PageHero title="Research & Innovation" subtitle="Turning curiosity into discoveries that improve lives." image={images.labScientist} crumbs={[{ label: 'Research' }]} />

      <section className="bg-brand-800 py-14">
        <div className="container-x grid grid-cols-2 gap-10 lg:grid-cols-4">
          {[
            { value: 420, suffix: '+', label: 'Research Publications' },
            { value: 38, suffix: '', label: 'Funded Projects' },
            { value: 22, suffix: '', label: 'Patents Filed' },
            { value: 45, suffix: '+', label: 'Ph.D Awarded' },
          ].map((s) => <StatCounter key={s.label} {...s} light />)}
        </div>
      </section>

      <Section eyebrow="Focus Areas" title="Where our research makes an impact" center>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-50 text-accent-600"><Icon aria-hidden /></span>
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-slate-50 py-16">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <img src={images.labStudents.src} alt={images.labStudents.alt} className="h-80 w-full rounded-2xl object-cover" loading="lazy" />
          <div>
            <p className="eyebrow">Research Support</p>
            <h2 className="section-title">Facilities & Funding</h2>
            <div className="mt-5">
              <CheckList
                items={[
                  'Central Instrumentation Facility with HPLC, HPTLC, FTIR, DSC, dissolution testers and a stability chamber',
                  'CPCSEA-registered animal house for pre-clinical studies',
                  'Grants from DST, SERB, GUJCOST and ICMR, plus industry-sponsored projects',
                  'Seed-money scheme for faculty and student research',
                  'Incubation support for pharma start-ups through the PMU Innovation Cell',
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Section id="phd" eyebrow="Doctoral Programme" title="Ph.D in Pharmaceutical Sciences" intro="Full-time and part-time Ph.D programmes as per UGC regulations. Admission is through an entrance test and interview, held twice a year.">
        <DataTable columns={['Discipline', 'Vacancies', 'Eligibility']} rows={phdRows} caption="Ph.D vacancies" />
      </Section>
      <CTABanner title="Interested in research at PMU?" text="Get in touch with our research cell to explore Ph.D and project opportunities." />
    </>
  );
}
