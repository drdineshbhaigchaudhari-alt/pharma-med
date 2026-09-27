export default function Section({ id, eyebrow, title, intro, children, className = '', center = false }) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="container-x">
        {(eyebrow || title) && (
          <div className={`mb-10 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}`}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="section-title">{title}</h2>}
            {intro && <p className="mt-3 text-slate-600">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

// Heading used inside long content columns (e.g. program pages).
export function Block({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="mb-4 flex items-center gap-3 text-xl font-bold sm:text-2xl">
        <span className="h-6 w-1.5 rounded bg-accent-500" aria-hidden />
        {title}
      </h2>
      {children}
    </section>
  );
}
