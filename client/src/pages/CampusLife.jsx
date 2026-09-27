import { BookOpen, BedDouble, Bus, Trophy, Music, HeartPulse, Wifi, Utensils } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import Seo from '../components/layout/Seo';
import Section from '../components/ui/Section';
import CTABanner from '../components/ui/CTABanner';
import { CheckList } from '../components/ui/AccreditationStrip';
import { images } from '../data/images';

const labs = [
  'Pharmaceutics & Industrial Pharmacy Lab',
  'Pharmaceutical Chemistry Lab',
  'Pharmacology Lab with CPCSEA-approved animal house',
  'Pharmacognosy & Herbal Drug Technology Lab',
  'Pharmaceutical Analysis & Instrumentation Lab (HPLC, UV, FTIR, HPTLC)',
  'Microbiology & Biotechnology Lab',
  'Machine Room and Pilot Plant',
  'Model Community Pharmacy',
  'Computer Lab with molecular-modelling software',
];

const amenities = [
  { icon: Wifi, title: 'Wi-Fi Campus', text: 'High-speed internet in classrooms, labs and hostels.' },
  { icon: Utensils, title: 'Cafeteria', text: 'Hygienic, affordable vegetarian meals and snacks.' },
  { icon: Bus, title: 'Transport', text: 'Buses covering major routes across Ahmedabad and Gandhinagar.' },
  { icon: HeartPulse, title: 'Health Centre', text: 'First-aid room and tie-ups with nearby hospitals.' },
];

const clubs = [
  { icon: Trophy, title: 'Sports', text: 'Cricket, badminton, table tennis, chess and the annual sports week.' },
  { icon: Music, title: 'Cultural Fest “Aushadhi”', text: 'Garba night, drama, music and art, all organised by students.' },
  { icon: HeartPulse, title: 'NSS & Health Camps', text: 'Blood donation drives, medicine-awareness campaigns and rural camps.' },
  { icon: BookOpen, title: 'Pharma Quiz & Tech Club', text: 'National pharmacy week events, poster contests and hackathons.' },
];

export default function CampusLife() {
  return (
    <>
      <Seo title="Campus Life" description="Laboratories, library, hostel, sports, cultural fest and student clubs at Pharma Med University, Ahmedabad." path="/campus-life" />
      <PageHero title="Campus Life" subtitle="Learning, friendships and memories that last a lifetime." image={images.celebrate} crumbs={[{ label: 'Campus Life' }]} />

      <Section eyebrow="Infrastructure" title="Laboratories built for hands-on learning">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img src={images.labStudents.src} alt={images.labStudents.alt} className="col-span-2 h-60 w-full rounded-xl object-cover" loading="lazy" />
            <img src={images.labShelves.src} alt={images.labShelves.alt} className="h-44 w-full rounded-xl object-cover" loading="lazy" />
            <img src={images.labScientist.src} alt={images.labScientist.alt} className="h-44 w-full rounded-xl object-cover" loading="lazy" />
          </div>
          <div>
            <p className="mb-5 text-slate-600">
              Our campus has more than 20 air-conditioned laboratories that meet PCI norms. Every practical session is designed so that each
              student works with the equipment themselves, not just watches a demonstration.
            </p>
            <CheckList items={labs} />
          </div>
        </div>
      </Section>

      <section id="library" className="scroll-mt-28 bg-slate-50 py-16">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Knowledge Hub</p>
            <h2 className="section-title">Central Library</h2>
            <p className="mt-4 text-slate-600">
              The fully computerised library holds more than 25,000 books, 60 print journals and access to thousands of e-journals through
              DELNET, Science Direct and the INFLIBNET N-LIST programme. A quiet reading hall with 150 seats stays open until 8 PM during exams.
            </p>
            <ul className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[['25K+', 'Books'], ['5K+', 'E-journals'], ['150', 'Seats']].map(([v, l]) => (
                <li key={l} className="card p-4"><p className="font-heading text-2xl font-bold text-brand-700">{v}</p><p className="text-xs text-slate-500">{l}</p></li>
              ))}
            </ul>
          </div>
          <img src={images.library.src} alt={images.library.alt} className="h-80 w-full rounded-2xl object-cover" loading="lazy" />
        </div>
      </section>

      <Section id="hostel" eyebrow="Stay With Us" title="Hostel & Amenities">
        <div className="card mb-8 flex flex-col gap-5 p-6 md:flex-row md:items-center">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700"><BedDouble size={28} aria-hidden /></span>
          <p className="text-slate-600">
            Separate hostels for boys and girls close to campus, with twin- and triple-sharing rooms, a vegetarian mess, reading room, RO water,
            24×7 CCTV security and resident wardens. Outstation students get first priority.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-5">
              <Icon className="text-accent-600" aria-hidden />
              <h3 className="mt-3 text-base font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50" eyebrow="Beyond Classrooms" title="Clubs, Fests & Activities">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <img src={images.campusStudents.src} alt={images.campusStudents.alt} className="h-96 w-full rounded-2xl object-cover" loading="lazy" />
          <div className="grid gap-5 sm:grid-cols-2">
            {clubs.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card p-5">
                <Icon className="text-saffron-600" aria-hidden />
                <h3 className="mt-3 text-base font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
