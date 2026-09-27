import { Target, Eye, HeartHandshake, Lightbulb, ShieldCheck, Leaf } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import Seo from '../components/layout/Seo';
import Section from '../components/ui/Section';
import StatCounter from '../components/ui/StatCounter';
import CTABanner from '../components/ui/CTABanner';
import { CheckList } from '../components/ui/AccreditationStrip';
import { images } from '../data/images';
import { site, stats, approvals } from '../data/site';

const values = [
  { icon: ShieldCheck, title: 'Integrity', text: 'Ethics and patient safety come first in everything we teach.' },
  { icon: Lightbulb, title: 'Innovation', text: 'We encourage curiosity, research and new ideas from day one.' },
  { icon: HeartHandshake, title: 'Compassion', text: 'We train pharmacists who put people at the centre of care.' },
  { icon: Leaf, title: 'Sustainability', text: 'We promote green chemistry and responsible pharma practice.' },
];

export default function About() {
  return (
    <>
      <Seo title="About Us" description="About Pharma Med University, Ahmedabad: history, vision and mission, director's message, approvals and infrastructure." path="/about" />
      <PageHero title="About Pharma Med University" subtitle="A centre for pharmaceutical education and research in Ahmedabad since 2009." image={images.campusStudents} crumbs={[{ label: 'About' }]} />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="section-title">Rooted in Ahmedabad, focused on the future</h2>
            <div className="prose-body mt-5">
              <p>
                Pharma Med University was founded in {site.established} with one clear purpose: to create pharmacy professionals who combine sound
                science with real compassion. From a single B.Pharm batch of 60 students, we have grown into a multi-programme institution
                offering diploma, undergraduate, postgraduate and doctoral education in pharmaceutical sciences.
              </p>
              <p>
                Our campus on Netaji Road, Ellisbridge, sits at the heart of Ahmedabad, close to leading hospitals, research organisations and
                Gujarat’s thriving pharmaceutical industry. This location gives our students unmatched access to internships, hospital training
                and industry mentors.
              </p>
            </div>
          </div>
          <img src={images.graduates.src} alt={images.graduates.alt} className="h-[420px] w-full rounded-2xl object-cover object-top shadow-lg" loading="lazy" />
        </div>
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

      <section id="director" className="scroll-mt-28 bg-brand-800 py-16 text-white">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[320px_1fr]">
          {/* Replace with the actual Director's photo: <img src="/images/director.jpg" alt="Dr. <Name>, Director" ... /> */}
          <div className="flex h-80 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/30 bg-white/5 text-white/60">
            <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 font-heading text-3xl font-bold text-saffron-400">PMU</span>
            <span className="mt-4 text-sm">Director’s photograph</span>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-400">Director’s Message</p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">“Pharmacy is science in the service of people.”</h2>
            <div className="mt-5 space-y-4 text-white/80">
              <p>
                Dear students and parents, choosing a career in pharmacy means choosing to make a difference in people’s lives. At Pharma Med
                University we take that responsibility seriously. Our faculty, laboratories and industry partnerships exist for one reason: to
                help every student find their potential.
              </p>
              <p>
                Whether you dream of discovering new medicines, working in a hospital or running your own pharmacy, you will find the guidance,
                exposure and encouragement you need here. I warmly welcome you to the Pharma Med University family.
              </p>
            </div>
            <p className="mt-6 font-semibold text-white">Director</p>
            <p className="text-sm text-white/70">Pharma Med University, Ahmedabad</p>
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
