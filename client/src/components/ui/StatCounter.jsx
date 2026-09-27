import { useEffect, useRef, useState } from 'react';

export default function StatCounter({ value, suffix = '', label, light = false }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return setN(value);
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min((t - start) / 1400, 1);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <p className={`font-heading text-4xl font-bold sm:text-5xl ${light ? 'text-saffron-400' : 'text-brand-700'}`}>
        {n.toLocaleString('en-IN')}{suffix}
      </p>
      <p className={`mt-2 text-sm font-medium ${light ? 'text-white/80' : 'text-slate-600'}`}>{label}</p>
    </div>
  );
}
