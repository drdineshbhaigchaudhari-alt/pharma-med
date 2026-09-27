import { useForm } from 'react-hook-form';
import { Field, Honeypot, PROGRAM_OPTIONS, StatusMessage, SubmitButton, emailRule, phoneRule, useSubmit } from './shared';

const CATEGORIES = ['ACPC', 'Management', 'NRI', 'NRI-Sponsored', 'International'];

function Fieldset({ legend, children }) {
  return (
    <fieldset className="rounded-lg border border-slate-200 p-5">
      <legend className="px-2 font-heading text-sm font-semibold uppercase tracking-wider text-brand-700">{legend}</legend>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

export default function ApplyForm({ defaultProgram = '' }) {
  const { register, handleSubmit, setError, reset, formState: { errors } } = useForm({ defaultValues: { program: defaultProgram } });
  const { status, submit } = useSubmit('apply', { setError, reset });
  const req = (msg) => ({ required: msg });

  return (
    <form onSubmit={handleSubmit(submit)} noValidate className="space-y-6">
      <Honeypot register={register} />

      <Fieldset legend="Programme">
        <Field label="Programme" required error={errors.program}>
          <select className="input mt-1" {...register('program', req('Please select a programme'))}>
            <option value="">Select programme</option>
            {PROGRAM_OPTIONS.map((p) => <option key={p}>{p}</option>)}
          </select>
        </Field>
        <Field label="Admission Category" required error={errors.category}>
          <select className="input mt-1" {...register('category', req('Please select a category'))}>
            <option value="">Select category</option>
            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </Field>
      </Fieldset>

      <Fieldset legend="Personal Details">
        <Field label="Full Name (as per 12th mark sheet)" required error={errors.name}>
          <input className="input mt-1" autoComplete="name" {...register('name', req('Name is required'))} />
        </Field>
        <Field label="Date of Birth" required error={errors.dob}>
          <input type="date" className="input mt-1" {...register('dob', req('Date of birth is required'))} />
        </Field>
        <Field label="Gender" required error={errors.gender}>
          <select className="input mt-1" {...register('gender', req('Please select gender'))}>
            <option value="">Select</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </Field>
        <Field label="Parent / Guardian Name" error={errors.guardianName}>
          <input className="input mt-1" {...register('guardianName')} />
        </Field>
        <Field label="Mobile Number" required error={errors.phone}>
          <input type="tel" className="input mt-1" autoComplete="tel" {...register('phone', phoneRule)} />
        </Field>
        <Field label="Email" required error={errors.email}>
          <input type="email" className="input mt-1" autoComplete="email" {...register('email', emailRule)} />
        </Field>
        <Field label="City" required error={errors.city}>
          <input className="input mt-1" autoComplete="address-level2" {...register('city', req('City is required'))} />
        </Field>
        <Field label="State" required error={errors.state}>
          <input className="input mt-1" defaultValue="Gujarat" autoComplete="address-level1" {...register('state', req('State is required'))} />
        </Field>
      </Fieldset>

      <Fieldset legend="Academic Details">
        <Field label="Board / University of Qualifying Exam" required error={errors.board}>
          <input className="input mt-1" placeholder="e.g. GSHSEB, CBSE" {...register('board', req('Board is required'))} />
        </Field>
        <Field label="Percentage in Qualifying Exam" required error={errors.percentage}>
          <input type="number" step="0.01" min="0" max="100" className="input mt-1" {...register('percentage', { required: 'Percentage is required', min: { value: 0, message: 'Invalid' }, max: { value: 100, message: 'Max 100' } })} />
        </Field>
        <Field label="Entrance Exam" error={errors.entranceExam}>
          <select className="input mt-1" {...register('entranceExam')}>
            <option value="">Not applicable</option>
            <option>GUJCET</option>
            <option>NEET</option>
            <option>JEE (Main)</option>
            <option>GPAT</option>
          </select>
        </Field>
        <Field label="Entrance Score / Rank" error={errors.entranceScore}>
          <input className="input mt-1" {...register('entranceScore')} />
        </Field>
      </Fieldset>

      <label className="flex gap-3 text-sm text-slate-600">
        <input type="checkbox" className="mt-1 h-4 w-4 accent-brand-700" {...register('consent', { required: 'Please accept to continue' })} />
        <span>I confirm the information above is correct, and I agree to be contacted by Pharma Med University about my application.</span>
      </label>
      {errors.consent && <p role="alert" className="-mt-4 text-xs text-red-600">{errors.consent.message}</p>}

      <StatusMessage status={status} />
      <SubmitButton status={status}>Submit Application</SubmitButton>
    </form>
  );
}
