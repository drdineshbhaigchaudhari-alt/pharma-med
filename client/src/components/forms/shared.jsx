import { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const PROGRAM_OPTIONS = ['B.Pharm', 'M.Pharm', 'Pharm.D', 'D.Pharm', 'Ph.D'];

export const phoneRule = {
  required: 'Mobile number is required',
  pattern: { value: /^(\+91[\s-]?)?[6-9]\d{9}$/, message: 'Enter a valid 10-digit Indian mobile number' },
};
export const emailRule = {
  required: 'Email is required',
  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
};

// Posts form data to the Node API; maps server-side validation errors back onto fields.
export function useSubmit(endpoint, { setError, reset }) {
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const submit = async (data) => {
    setStatus({ state: 'loading', message: '' });
    try {
      const res = await fetch(`/api/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        reset();
        return setStatus({ state: 'success', message: 'Thank you! We have received your details and emailed you a confirmation. Our team will contact you within 2 working days.' });
      }
      json.errors?.forEach((e) => setError(e.field, { message: e.message }));
      setStatus({ state: 'error', message: json.message || 'Please correct the highlighted fields.' });
    } catch {
      setStatus({ state: 'error', message: 'Network error. Please check your connection and try again.' });
    }
  };

  return { status, submit };
}

export function Field({ label, error, required, children, className = '' }) {
  return (
    <div className={className}>
      <label className="label">
        {label} {required && <span className="text-red-600" aria-hidden>*</span>}
        {children}
      </label>
      {error && <p role="alert" className="mt-1 text-xs text-red-600">{error.message}</p>}
    </div>
  );
}

export function Honeypot({ register }) {
  return (
    <div className="hidden" aria-hidden>
      <label>Website <input tabIndex={-1} autoComplete="off" {...register('website')} /></label>
    </div>
  );
}

export function StatusMessage({ status }) {
  if (status.state === 'success')
    return (
      <p role="status" className="flex gap-2 rounded-md bg-accent-50 p-4 text-sm text-accent-700">
        <CheckCircle2 size={18} className="shrink-0" aria-hidden /> {status.message}
      </p>
    );
  if (status.state === 'error')
    return (
      <p role="alert" className="flex gap-2 rounded-md bg-red-50 p-4 text-sm text-red-700">
        <AlertCircle size={18} className="shrink-0" aria-hidden /> {status.message}
      </p>
    );
  return null;
}

export function SubmitButton({ status, children }) {
  return (
    <button type="submit" disabled={status.state === 'loading'} className="btn-primary w-full py-3 disabled:opacity-60 sm:w-auto sm:px-10">
      {status.state === 'loading' ? 'Submitting…' : children}
    </button>
  );
}
