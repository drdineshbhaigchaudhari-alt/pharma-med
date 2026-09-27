import Breadcrumb from './Breadcrumb';

// Inner-page banner: photo background with navy overlay, title and breadcrumb.
export default function PageHero({ title, subtitle, image, crumbs, children }) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-800">
      {image && <img src={image.src} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900/95 via-brand-800/80 to-brand-700/40" />
      <div className="container-x py-14 sm:py-20">
        <Breadcrumb items={crumbs} light />
        <h1 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">{subtitle}</p>}
        {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
