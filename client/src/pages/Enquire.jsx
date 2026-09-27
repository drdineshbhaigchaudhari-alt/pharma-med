import { useSearchParams } from 'react-router-dom';
import { PhoneCall, FileDown, Clock } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import Seo from '../components/layout/Seo';
import EnquiryForm from '../components/forms/EnquiryForm';
import { images } from '../data/images';
import { site } from '../data/site';

export default function Enquire() {
  const [params] = useSearchParams();
  return (
    <>
      <Seo title="Admission Enquiry" description="Ask about admissions at Pharma Med University, Ahmedabad, and request a prospectus or a call back from our counsellor." path="/enquire" />
      <PageHero title="Admission Enquiry" subtitle="Request a prospectus or a call back from our admission counsellor." image={images.library} crumbs={[{ label: 'Enquire Now' }]} />
      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_340px]">
          <div className="card p-6 sm:p-8">
            <EnquiryForm defaultProgram={params.get('program') || ''} />
          </div>
          <aside className="space-y-4">
            {[
              { icon: PhoneCall, title: 'Call us directly', text: site.phones.admissions },
              { icon: FileDown, title: 'Prospectus 2026-27', text: 'We will email the prospectus to you after you submit the form.' },
              { icon: Clock, title: 'Response time', text: 'Within 2 working days, often the same day.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="card flex gap-4 p-5">
                <Icon className="shrink-0 text-accent-600" aria-hidden />
                <div><h2 className="text-base font-semibold">{title}</h2><p className="mt-1 text-sm text-slate-600">{text}</p></div>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}
