import PageHero from '../components/layout/PageHero';
import Seo from '../components/layout/Seo';
import Section from '../components/ui/Section';
import CTABanner from '../components/ui/CTABanner';
import FacultyGrid from '../components/ui/FacultyGrid';
import { images } from '../data/images';
import { faculty } from '../data/faculty';

export default function Faculty() {
  return (
    <>
      <Seo title="Faculty & Staff" description="Faculty and staff of the University Institute of Pharmaceutical Sciences, Pharma Med University, Ahmedabad." path="/faculty" />
      <PageHero title="Faculty & Staff" subtitle="University Institute of Pharmaceutical Sciences" image={images.labStudents} crumbs={[{ label: 'About', to: '/about' }, { label: 'Faculty & Staff' }]} />

      <Section eyebrow="Our People" title="Meet our faculty" intro="Experienced teachers and researchers trained at leading institutions in India and abroad.">
        <FacultyGrid people={faculty} />
      </Section>
      <CTABanner />
    </>
  );
}
