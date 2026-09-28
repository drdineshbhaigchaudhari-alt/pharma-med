import { Target, Eye, HeartHandshake, Lightbulb, ShieldCheck, Leaf, Award, GraduationCap } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import Seo from '../components/layout/Seo';
import Section from '../components/ui/Section';
import StatCounter from '../components/ui/StatCounter';
import CTABanner from '../components/ui/CTABanner';
import { CheckList } from '../components/ui/AccreditationStrip';
import FacultyGrid from '../components/ui/FacultyGrid';
import { faculty } from '../data/faculty';
import { images } from '../data/images';
import { stats, approvals, viceChancellor } from '../data/site';

const values = [
  { icon: ShieldCheck, title: 'Integrity', text: 'Ethics and patient safety come first in everything we teach.' },
  { icon: Lightbulb, title: 'Innovation', text: 'We encourage curiosity, research and new ideas from day one.' },
  { icon: HeartHandshake, title: 'Compassion', text: 'We train pharmacists who put people at the centre of care.' },
  { icon: Leaf, title: 'Sustainability', text: 'We promote green chemistry and responsible pharma practice.' },
];

const nirf = [
  { year: 2023, rank: 27 },
  { year: 2024, rank: 29 },
  { year: 2025, rank: 27 },
];

const researchStats = [
  { value: '₹4 Cr+', label: 'Research funding' },
  { value: '₹1250 L+', label: 'Extramural projects' },
  { value: '375+', label: 'Publications' },
  { value: '7076', label: 'Citations' },
  { value: '44', label: 'h-index' },
  { value: '3.48', label: 'Avg. impact factor' },
  { value: '04', label: 'Patents' },
  { value: 'Top 2%', label: 'Cited scientists (4 faculty)' },
];

const postdocs = [
  'University of Cape Town, South Africa',
  'University of Warsaw, Poland',
  'North Dakota State University, USA',
  'University of Texas Health Science Center, USA',
  'University of Southern California, USA',
  'University of Connecticut, USA',
];

export default function About() {
  return (
    <>
      <Seo title="About Us" description="About the Department of Pharmacy, Pharma Medical University Ahmedabad: NIRF ranking, research, students and placements, approvals." path="/about" />
      <PageHero title="About Pharma Med University" subtitle="Department of Pharmacy, NIRF-ranked among India's top pharmacy institutions." image={images.campusStudents} crumbs={[{ label: 'About' }]} />

      <section id="vice-chancellor" className="scroll-mt-28 bg-slate-50 py-16 sm:py-20">
        <div className="container-x">
          <div className="card grid overflow-hidden md:grid-cols-[minmax(0,380px)_1fr]">
            <img src={viceChancellor.photo} alt={viceChancellor.name} className="aspect-[4/5] h-full w-full object-cover object-top md:aspect-auto" loading="lazy" />
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <p className="eyebrow">Vice Chancellor</p>
              <h2 className="section-title text-3xl sm:text-4xl">{viceChancellor.name}</h2>
              <p className="mt-2 text-lg font-medium text-accent-600">
                {viceChancellor.title}, {viceChancellor.org}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { value: '#27', label: 'NIRF Rank 2025' },
                  { value: 'DST-FIST', label: 'Recognised department' },
                  { value: '375+', label: 'Research publications' },
                ].map((h) => (
                  <div key={h.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                    <p className="font-heading text-xl font-bold text-brand-700">{h.value}</p>
                    <p className="mt-1 text-xs text-slate-600">{h.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-slate-600">
                Under the Vice Chancellor’s leadership, the university continues to build on its record in pharmaceutical education and research.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section id="department">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">About Department</p>
            <h2 className="section-title">Department of Pharmacy, Pharma Medical University</h2>
            <div className="prose-body mt-5">
              <p>
                The Department of Pharmacy at the Pharma Medical University Ahmedabad (PMUGuj) was established in 2012 with the aim to excel in
                the field of pharmaceutical sciences. It stands as a beacon of excellence in pharmaceutical education and research, consistently
                ranked between 27th and 29th in the National Institutional Ranking Framework (NIRF) for the last three years.
              </p>
              <p>
                The programmes run by the department are approved by the All India Council for Technical Education (AICTE) and the Pharmacy
                Council of India (PCI). The department offers a comprehensive curriculum aligned with the PCI syllabus, with Master of Pharmacy
                (M.Pharm) programmes in Pharmaceutical Chemistry, Pharmaceutics and Pharmacology, and a Doctor of Philosophy (Ph.D.) in Pharmacy.
              </p>
              <p>
                The department has various ongoing extramural funded projects worth more than ₹1250 lakhs from Government of India agencies such
                as DST, NRDC, ICMR, DBT and SPARC.
              </p>
            </div>
          </div>
          <div>
            <img src={images.labStudents.src} alt={images.labStudents.alt} className="aspect-[16/10] w-full rounded-2xl object-cover object-center shadow-lg" loading="lazy" />
            <div className="mt-6 grid grid-cols-3 gap-4">
              {nirf.map((n) => (
                <div key={n.year} className="card p-4 text-center">
                  <Award className="mx-auto text-accent-600" size={22} aria-hidden />
                  <p className="mt-2 font-heading text-2xl font-bold text-brand-700">#{n.rank}</p>
                  <p className="text-xs text-slate-600">NIRF {n.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <section id="research" className="scroll-mt-28 bg-slate-50 py-16 sm:py-20">
        <div className="container-x">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow">Research at the Department</p>
            <h2 className="section-title">Research is our cornerstone</h2>
          </div>
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            <div className="prose-body">
              <p>
                The department is a Department of Science and Technology (DST)-FIST recognised department with more than ₹4 crores of research
                funding from agencies such as DST, the Science and Engineering Research Board, the Indian Council of Medical Research (ICMR), the
                Department of Biotechnology, the University Grants Commission (UGC), the Council of Scientific and Industrial Research (CSIR) and
                DST-Rajasthan. The average research funding per faculty member is ₹178.6 lakhs.
              </p>
              <p>
                Faculty members hold a total of 04 patents and have published over 375 papers in reputed journals with an average impact factor of
                3.48. The department has 7076 citations in total and an h-index of 44. Research areas include drug delivery, pharmacokinetics, drug
                design, computational chemistry, phytochemistry and nanotechnology.
              </p>
              <p>
                Two faculty members have received international recognition through the American Association of Pharmaceutical Scientists (AAPS)
                Award and the American Association of Indian Pharmaceutical Scientists (AAiPS) Award. One faculty member has received national
                awards including the ICMR-Shakuntala Amir Chand Prize 2020 and the National Technical Teacher’s Award 2022. At the university
                level, departmental teachers have won the Best Teacher and Best Researcher awards.
              </p>
              <p>
                Four faculty members are among the top 2% cited scientists worldwide (as per the Stanford University list published in Mendeley
                Data, Elsevier), and many serve on the editorial boards of reputed journals such as PLOS One, Frontiers in Pharmacology and Drug
                Delivery Letters.
              </p>
            </div>
            <div className="grid grid-cols-2 content-start gap-4">
              {researchStats.map((r) => (
                <div key={r.label} className="card p-5 text-center">
                  <p className="font-heading text-2xl font-bold text-brand-700">{r.value}</p>
                  <p className="mt-1 text-xs text-slate-600">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section id="students" eyebrow="Students and Placements" title="Talented students, rewarding careers">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="prose-body">
            <p>
              The department attracts quality students from almost all states and union territories of the country, with roughly 48% male and
              52% female students. Most M.Pharm students are GPAT (Graduate Pharmacy Aptitude Test) qualified and receive a monthly UGC stipend of
              ₹12,400. Most PhD students also receive fellowships from CSIR and ICMR, and two PhD scholars have been awarded the Commonwealth
              Split-site Scholarship.
            </p>
            <p>
              Our students and scholars are the backbone of the department’s research and have many national and international awards to their
              credit. The placement profile is excellent: M.Pharm graduates serve in government and multinational organisations with attractive
              salaries, and our PhDs are also well placed. One of our PhD scholars is a Regular Assistant Professor at the National Institute of
              Pharmaceutical Education and Research (NIPER), Guwahati.
            </p>
          </div>
          <div className="card p-8">
            <GraduationCap className="text-accent-600" size={32} aria-hidden />
            <h3 className="mt-4 text-lg font-bold">Post-doctoral fellowships abroad</h3>
            <p className="mt-2 text-sm text-slate-600">Our scholars have secured prestigious post-doctoral positions at:</p>
            <div className="mt-4">
              <CheckList items={postdocs} />
            </div>
          </div>
        </div>
      </Section>

      <Section id="faculty" className="scroll-mt-28 border-t border-slate-100" eyebrow="Faculty & Staff" title="Meet our faculty" intro="University Institute of Pharmaceutical Sciences">
        <FacultyGrid people={faculty} />
      </Section>

      <section id="vision" className="scroll-mt-28 bg-slate-50 py-16">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <div className="card p-8">
            <Eye className="text-accent-600" size={32} aria-hidden />
            <h2 className="mt-4 text-2xl font-bold">Our Vision</h2>
            <p className="mt-3 text-slate-600">
              To be a nationally respected centre of excellence in pharmaceutical education, research and patient-centred practice, one that
              contributes to a healthier India and a healthier world.
            </p>
          </div>
          <div className="card p-8">
            <Target className="text-accent-600" size={32} aria-hidden />
            <h2 className="mt-4 text-2xl font-bold">Our Mission</h2>
            <div className="mt-3">
              <CheckList
                items={[
                  'Deliver a curriculum that blends strong fundamentals with industry-relevant skills.',
                  'Encourage research and innovation that addresses real healthcare problems.',
                  'Build ethical, empathetic professionals committed to lifelong learning.',
                  'Partner with industry, hospitals and communities for shared growth.',
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Core Values" title="What we stand for" center>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-6 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-700"><Icon size={26} aria-hidden /></span>
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <section id="message" className="scroll-mt-28 bg-brand-800 py-16 text-white">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[320px_1fr]">
          <img src={viceChancellor.photo} alt={viceChancellor.name} className="aspect-[4/5] w-full max-w-xs rounded-2xl object-cover object-top shadow-xl lg:max-w-none" loading="lazy" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-400">Vice Chancellor’s Message</p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">“Pharmacy is science in the service of people.”</h2>
            {/* DRAFT message: replace with the Vice Chancellor's own approved text before launch. */}
            <div className="mt-5 space-y-4 text-white/80">
              <p>
                Dear students and parents, choosing a career in pharmacy means choosing to make a difference in people’s lives. At Pharma Medical
                University we take that responsibility seriously. Our faculty, laboratories and industry partnerships exist for one reason: to
                help every student find their potential.
              </p>
              <p>
                Whether you dream of discovering new medicines, working in a hospital or running your own pharmacy, you will find the guidance,
                exposure and encouragement you need here. I warmly welcome you to the Pharma Medical University family.
              </p>
            </div>
            <p className="mt-6 font-semibold text-white">{viceChancellor.name}</p>
            <p className="text-sm text-white/70">{viceChancellor.title}, {viceChancellor.org}</p>
          </div>
        </div>
      </section>

      <Section id="approvals" eyebrow="Recognition" title="Approvals & Accreditation">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {approvals.map((a) => (
            <li key={a.short} className="card flex items-center gap-4 p-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-brand-700 font-heading text-sm font-bold text-brand-700">{a.short}</span>
              <span className="text-sm text-slate-600">{a.long}</span>
            </li>
          ))}
        </ul>
      </Section>

      <section className="bg-slate-50 py-14">
        <div className="container-x grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s) => <StatCounter key={s.label} {...s} />)}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
