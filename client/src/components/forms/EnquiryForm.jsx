import { useForm } from 'react-hook-form';
import { Field, Honeypot, PROGRAM_OPTIONS, StatusMessage, SubmitButton, emailRule, phoneRule, useSubmit } from './shared';

export default function EnquiryForm({ defaultProgram = '', compact = false }) {
  const { register, handleSubmit, setError, reset, formState: { errors } } = useForm({ defaultValues: { program: defaultProgram } });
  const { status, submit } = useSubmit('enquiry', { setError, reset });

  return (
    <form onSubmit={handleSubmit(submit)} noValidate className="space-y-4">
      <Honeypot register={register} />
      <div className={`grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <Field label="Full Name" required error={errors.name}>
          <input className="input mt-1" autoComplete="name" {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Name is too short' } })} />
        </Field>
        <Field label="Mobile Number" required error={errors.phone}>
          <input className="input mt-1" type="tel" inputMode="tel" autoComplete="tel" placeholder="98XXXXXXXX" {...register('phone', phoneRule)} />
        </Field>
        <Field label="Email" required error={errors.email}>
          <input className="input mt-1" type="email" autoComplete="email" {...register('email', emailRule)} />
        </Field>
        <Field label="Programme of Interest" required error={errors.program}>
          <select className="input mt-1" {...register('program', { required: 'Please select a programme' })}>
            <option value="">Select programme</option>
            {PROGRAM_OPTIONS.map((p) => <option key={p}>{p}</option>)}
          </select>
        </Field>
        <Field label="City" error={errors.city}>
          <input className="input mt-1" autoComplete="address-level2" {...register('city')} />
        </Field>
      </div>
      <Field label="Your Question" error={errors.message}>
        <textarea rows={compact ? 3 : 4} className="input mt-1" {...register('message', { maxLength: { value: 1000, message: 'Maximum 1000 characters' } })} />
      </Field>
      <StatusMessage status={status} />
      <SubmitButton status={status}>Submit Enquiry</SubmitButton>
    </form>
  );
}
