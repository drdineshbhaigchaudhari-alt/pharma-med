import { useSearchParams } from 'react-router-dom';
import PageHero from '../components/layout/PageHero';
import Seo from '../components/layout/Seo';
import ApplyForm from '../components/forms/ApplyForm';
import { CheckList } from '../components/ui/AccreditationStrip';
import { images } from '../data/images';

export default function Apply() {
  const [params] = useSearchParams();
  return (
    <>
      <Seo title="Apply Online 2026-27" description="Apply online for B.Pharm, M.Pharm, Pharm.D and D.Pharm admissions 2026-27 at Pharma Med University, Ahmedabad." path="/apply" />
      <PageHero title="Online Application 2026-27" subtitle="Complete the form below to start your admission. It takes about 10 minutes." image={images.labStudents} crumbs={[{ label: 'Admissions & Aid', to: '/admissions' }, { label: 'Apply Online' }]} />
      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="card p-6 sm:p-8">
            <ApplyForm defaultProgram={params.get('program') || ''} />
          </div>
          <aside className="card h-fit p-6 lg:sticky lg:top-28">
            <h2 className="text-lg font-semibold">Before you apply</h2>
            <div className="mt-4">
              <CheckList
                items={[
                  'Keep your 10th and 12th mark sheets ready.',
                  'Keep your entrance exam scorecard (GUJCET / NEET / JEE / GPAT) handy.',
                  'Use an email address and mobile number that you check regularly.',
                  'Our team will send you a link to pay the application fee and upload documents.',
                ]}
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
