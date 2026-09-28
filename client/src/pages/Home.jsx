import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FlaskConical, Microscope, Pill, Stethoscope, GraduationCap, Building2, Award, Users2, Megaphone, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Seo from '../components/layout/Seo';
import AccreditationStrip from '../components/ui/AccreditationStrip';
import Section from '../components/ui/Section';
import StatCounter from '../components/ui/StatCounter';
import CTABanner from '../components/ui/CTABanner';
import EnquiryForm from '../components/forms/EnquiryForm';
import FacultyGrid from '../components/ui/FacultyGrid';
import { faculty } from '../data/faculty';
import { programs } from '../data/programs';
import { images } from '../data/images';
import { site, stats, notices, viceChancellor } from '../data/site';

const slides = [
  { image: images.heroStudents, eyebrow: 'Admissions 2026-27 Open', title: 'Shape the Future of Healthcare', text: 'PCI-approved B.Pharm, M.Pharm, Pharm.D and D.Pharm programmes in the heart of Ahmedabad.' },
  { image: images.labStudents, eyebrow: 'Learn by Doing', title: 'Labs That Mirror the Industry', text: 'More than 20 modern laboratories, a model pharmacy and a central instrumentation facility.' },
  { image: images.campusStudy, eyebrow: 'Student Life', title: 'A Campus That Feels Like Home', text: 'Clubs, fests, sports and a caring mentor system that supports you every step of the way.' },
];

const programIcons = { 'B.Pharm': Pill, 'M.Pharm': Microscope, 'Pharm.D': Stethoscope, 'D.Pharm': FlaskConical };

const why = [
  { icon: Award, title: 'PCI Approved & NAAC A+', text: 'Nationally recognised programmes that meet the highest standards of pharmacy education.' },
  { icon: Users2, title: 'Experienced Faculty', text: 'Ph.D-qualified professors with industry and research experience, and a 1:15 teacher–student ratio.' },
  { icon: Building2, title: 'Industry Connect', text: 'MoUs with leading pharma companies in the Ahmedabad–Vadodara pharma corridor for internships and live projects.' },
  { icon: GraduationCap, title: 'Scholarships', text: 'MYSY, Digital Gujarat and university merit scholarships. Nearly 40% of students receive financial support.' },
];

const facilities = [
  { image: images.labStudents, title: 'Pharmacognosy & Herbal Lab', text: 'Herbarium, extraction units and phytochemical screening.' },
  { image: images.labShelves, title: 'Pharmaceutical Chemistry Lab', text: 'Synthesis, analysis and quality testing with modern reagents.' },
  { image: images.pharmacistCounter, title: 'Model Community Pharmacy', text: 'Real-world dispensing, counselling and inventory practice.' },
  { image: images.library, title: 'Central Library', text: '25,000+ books, DELNET, Science Direct and a digital reading zone.' },
];

const testimonials = [
  { name: 'Riya Patel', meta: 'B.Pharm 2024 · Formulation Scientist', text: 'The practice-school training and industrial visits gave me the confidence to crack my first R&D interview. The faculty really care about each student.' },
  { name: 'Harsh Desai', meta: 'M.Pharm (Pharmacology) 2025', text: 'I had access to modern instruments for my research, and my guide helped me publish my first paper before I graduated.' },
  { name: 'Nidhi Shah', meta: 'Pharm.D 2023 · Clinical Pharmacist', text: 'Hospital postings from the fourth year onwards meant I was ready for the ward on day one of my job.' },
];

const recruiters = ['Zydus Lifesciences', 'Torrent Pharma', 'Intas Pharmaceuticals', 'Cadila Pharmaceuticals', 'Sun Pharma', 'Alembic', 'Dr. Reddy’s', 'Lupin', 'Cipla', 'Troikaa'];

function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [paused]);
  const go = (d) => setI((x) => (x + d + slides.length) % slides.length);

  return (
    <section className="relative isolate h-[560px] overflow-hidden bg-brand-900 sm:h-[620px]" aria-roledescription="carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((s, idx) => (
        <div key={s.title} className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? 'opacity-100' : 'pointer-events-none opacity-0'}`} aria-hidden={idx !== i}>
          <img src={s.image.src} alt={s.image.alt} className="absolute inset-0 -z-10 h-full w-full object-cover" fetchpriority={idx === 0 ? 'high' : 'low'} />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900/95 via-brand-900/70 to-transparent" />
          <div className="container-x flex h-full flex-col justify-center">
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-500/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">{s.eyebrow}</p>
            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">{s.title}</h1>
            <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">{s.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/apply" className="btn-primary px-7 py-3" tabIndex={idx === i ? 0 : -1}>Apply Now <ArrowRight size={16} /></Link>
              <Link to="/programmes/bachelor-of-pharmacy" className="btn-outline px-7 py-3" tabIndex={idx === i ? 0 : -1}>Explore Programmes</Link>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 left-0 right-0">
        <div className="container-x flex items-center gap-3">
          <button type="button" onClick={() => go(-1)} className="rounded-full bg-white/15 p-2 text-white hover:bg-white/30" aria-label="Previous slide"><ChevronLeft size={18} /></button>
          {slides.map((s, idx) => (
            <button key={s.title} type="button" onClick={() => setI(idx)} aria-label={`Go to slide ${idx + 1}`} aria-current={idx === i} className={`h-2 rounded-full transition-all ${idx === i ? 'w-8 bg-saffron-500' : 'w-2 bg-white/50'}`} />
          ))}
          <button type="button" onClick={() => go(1)} className="rounded-full bg-white/15 p-2 text-white hover:bg-white/30" aria-label="Next slide"><ChevronRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}

function NoticeTicker() {
  const items = [...notices, ...notices];
  return (
    <div className="flex items-stretch bg-saffron-500 text-sm text-brand-900">
      <p className="z-10 flex shrink-0 items-center gap-2 bg-brand-800 px-4 py-2.5 font-semibold text-white"><Megaphone size={16} aria-hidden /> Notices</p>
      <div className="relative flex-1 overflow-hidden">
        <ul className="flex w-max animate-marquee gap-12 whitespace-nowrap py-2.5 pl-6 font-medium hover:[animation-play-state:paused] motion-reduce:animate-none">
          {items.map((n, i) => <li key={i} aria-hidden={i >= notices.length}>• {n}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        description="Pharma Med University, Ellisbridge, Ahmedabad: PCI-approved B.Pharm, M.Pharm, Pharm.D and D.Pharm programmes. Admissions 2026-27 open. Modern labs, expert faculty, 92% placements."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollegeOrUniversity',
          name: site.name,
          url: site.url,
          email: site.emails.info,
          telephone: site.phones.admissions,
          foundingDate: String(site.established),
          address: { '@type': 'PostalAddress', streetAddress: `${site.address.line1}, ${site.address.line2}`, addressLocality: site.address.city, addressRegion: site.address.state, postalCode: site.address.pin, addressCountry: 'IN' },
        }}
      />
      <HeroSlider />
      <NoticeTicker />
      <AccreditationStrip />

      {/* About + quick enquiry */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow">Welcome to Pharma Med University</p>
            <h2 className="section-title">Excellence in pharmaceutical education since {site.established}</h2>
            <div className="prose-body mt-5">
              <p>
                Pharma Med University is a dedicated centre for pharmaceutical sciences in Ellisbridge, one of Ahmedabad’s best-known educational
                neighbourhoods. For over a decade and a half we have trained pharmacists, researchers and healthcare leaders who now work in
                India’s top pharma companies, hospitals and regulatory bodies.
              </p>
              <p>
                Our programmes combine a rigorous PCI curriculum with hands-on laboratory work, hospital exposure and industry internships.
                Learning here goes beyond textbooks: students take part in research projects, national conferences, community health camps and
                start-up incubation from the first year.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <img src={images.campusStudy.src} alt={images.campusStudy.alt} className="h-48 w-full rounded-xl object-cover sm:h-56" loading="lazy" />
              <img src={images.labScientist.src} alt={images.labScientist.alt} className="h-48 w-full rounded-xl object-cover sm:h-56" loading="lazy" />
            </div>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent-600 hover:text-accent-700">Know more about us <ArrowRight size={16} /></Link>
          </div>
          <div className="card border-t-4 border-t-saffron-500 p-6 lg:sticky lg:top-28">
            <h2 className="text-xl font-bold">Quick Admission Enquiry</h2>
            <p className="mb-5 mt-1 text-sm text-slate-600">Get a call back from our admission counsellor.</p>
            <EnquiryForm compact />
          </div>
        </div>
      </Section>

      {/* Vice Chancellor */}
      <section className="relative isolate overflow-hidden bg-brand-900 py-16 sm:py-20">
        <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-accent-500/10" aria-hidden />
        <div className="absolute -bottom-40 -left-24 -z-10 h-96 w-96 rounded-full bg-saffron-400/10" aria-hidden />
        <div className="container-x grid items-center gap-10 lg:grid-cols-[420px_1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border-2 border-saffron-400/60" aria-hidden />
            <img src={viceChancellor.photo} alt={viceChancellor.name} className="relative aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-2xl" loading="lazy" />
          </div>
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-400">Leadership</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{viceChancellor.name}</h2>
            <p className="mt-3 text-lg font-medium text-white/80">
              {viceChancellor.title}, {viceChancellor.org}
            </p>
            <span className="mx-auto mt-6 block h-1 w-20 rounded bg-saffron-400 lg:mx-0" aria-hidden />
            <p className="mt-6 max-w-xl text-white/70 lg:max-w-2xl">
              Leading Pharma Medical University in its mission of excellence in pharmaceutical education, research and patient-centred practice.
            </p>
            <Link to="/about#vice-chancellor" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-saffron-400 px-5 py-3 font-semibold text-brand-900 transition hover:bg-saffron-500">
              About our leadership <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <Section className="bg-slate-50" eyebrow="Academic Programmes" title="Find the right programme for you" intro="From a two-year diploma to a professional doctorate, choose the path that matches your goals." center>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => {
            const Icon = programIcons[p.code] || Pill;
            return (
              <Link key={p.slug} to={`/programmes/${p.slug}`} className="card group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-40 overflow-hidden">
                  <img src={p.image.src} alt={p.image.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  <span className="absolute left-4 top-4 rounded bg-white/95 px-2.5 py-1 text-xs font-bold text-brand-700">{p.level}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <Icon className="text-accent-600" aria-hidden />
                  <h3 className="mt-3 text-lg font-semibold">{p.name}</h3>
                  <p className="text-sm font-medium text-accent-600">{p.code}</p>
                  <p className="mt-3 flex-1 text-sm text-slate-600">{p.duration} · {p.intake} seats</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:text-accent-600">View details <ArrowRight size={15} /></span>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Stats */}
      <section className="relative isolate overflow-hidden bg-brand-800 py-16">
        <img src={images.graduates.src} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-top opacity-15" loading="lazy" />
        <div className="container-x grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s) => <StatCounter key={s.label} {...s} light />)}
        </div>
      </section>

      {/* Why PMU */}
      <Section eyebrow="Why Pharma Med University" title="An education built around your success" center>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {why.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-6 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-50 text-accent-600"><Icon size={26} aria-hidden /></span>
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Faculty */}
      <Section eyebrow="Our Faculty" title="Learn from experienced teachers and researchers">
        <FacultyGrid people={faculty.filter((f) => f.featured)} />
        <Link to="/faculty" className="mt-8 inline-flex items-center gap-2 font-semibold text-accent-600 hover:text-accent-700">Meet all faculty <ArrowRight size={16} /></Link>
      </Section>

      {/* Facilities */}
      <Section className="bg-slate-50" eyebrow="Infrastructure" title="World-class labs and learning spaces">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f) => (
            <figure key={f.title} className="group relative h-72 overflow-hidden rounded-xl">
              <img src={f.image.src} alt={f.image.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-900 via-brand-900/70 to-transparent p-5 pt-16">
                <h3 className="text-base font-semibold text-white">{f.title}</h3>
                <p className="mt-1 text-sm text-white/80">{f.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <Link to="/campus-life" className="mt-8 inline-flex items-center gap-2 font-semibold text-accent-600 hover:text-accent-700">Explore campus life <ArrowRight size={16} /></Link>
      </Section>

      {/* Testimonials */}
      <Section eyebrow="Student Voices" title="What our alumni say" center>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="card relative p-6">
              <Quote className="text-saffron-500" size={28} aria-hidden />
              <p className="mt-3 text-sm leading-relaxed text-slate-600">“{t.text}”</p>
              <footer className="mt-5 border-t border-slate-100 pt-4">
                <p className="font-semibold text-brand-800">{t.name}</p>
                <p className="text-xs text-slate-500">{t.meta}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      {/* Recruiters */}
      <section className="border-y border-slate-200 bg-white py-10">
        <div className="container-x">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-slate-500">Our students are placed at</p>
          <ul className="flex flex-wrap justify-center gap-3">
            {recruiters.map((r) => (
              <li key={r} className="rounded-md border border-slate-200 bg-slate-50 px-5 py-3 font-heading text-sm font-semibold text-slate-600">{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
