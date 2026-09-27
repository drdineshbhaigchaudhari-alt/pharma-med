import { Link } from 'react-router-dom';
import Seo from '../components/layout/Seo';

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <Seo title="Page not found" />
      <p className="font-heading text-7xl font-bold text-brand-100">404</p>
      <h1 className="mt-4 text-2xl font-bold">We couldn’t find that page</h1>
      <p className="mt-2 text-slate-600">The page may have moved. Try one of these instead.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn-secondary">Go to Home</Link>
        <Link to="/admissions" className="btn-primary">Admissions</Link>
      </div>
    </section>
  );
}
