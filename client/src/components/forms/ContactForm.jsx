import { useForm } from 'react-hook-form';
import { Field, Honeypot, StatusMessage, SubmitButton, emailRule, phoneRule, useSubmit } from './shared';

export default function ContactForm() {
  const { register, handleSubmit, setError, reset, formState: { errors } } = useForm();
  const { status, submit } = useSubmit('contact', { setError, reset });

  return (
    <form onSubmit={handleSubmit(submit)} noValidate className="space-y-4">
      <Honeypot register={register} />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" required error={errors.name}>
          <input className="input mt-1" autoComplete="name" {...register('name', { required: 'Name is required' })} />
        </Field>
        <Field label="Mobile Number" required error={errors.phone}>
          <input className="input mt-1" type="tel" autoComplete="tel" {...register('phone', phoneRule)} />
        </Field>
        <Field label="Email" required error={errors.email} className="sm:col-span-2">
          <input className="input mt-1" type="email" autoComplete="email" {...register('email', emailRule)} />
        </Field>
        <Field label="Subject" required error={errors.subject} className="sm:col-span-2">
          <input className="input mt-1" {...register('subject', { required: 'Subject is required', minLength: { value: 3, message: 'Subject is too short' } })} />
        </Field>
      </div>
      <Field label="Message" required error={errors.message}>
        <textarea rows={5} className="input mt-1" {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'At least 10 characters' } })} />
      </Field>
      <StatusMessage status={status} />
      <SubmitButton status={status}>Send Message</SubmitButton>
    </form>
  );
}
