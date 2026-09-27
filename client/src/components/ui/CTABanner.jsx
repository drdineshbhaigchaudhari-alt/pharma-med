import { Link } from 'react-router-dom';
import { images } from '../../data/images';

export default function CTABanner({
  title = 'Your journey in pharmaceutical sciences starts here',
  text = 'Admissions for B.Pharm, M.Pharm, Pharm.D and D.Pharm 2026-27 are now open. Limited seats. Apply today.',
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-800">
      <img src={images.celebrate.src} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20" loading="lazy" />
      <div className="container-x flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 text-white/80">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/apply" className="btn-primary px-7 py-3">Apply Now</Link>
          <Link to="/enquire" className="btn-outline px-7 py-3">Enquire Now</Link>
        </div>
      </div>
    </section>
  );
}
