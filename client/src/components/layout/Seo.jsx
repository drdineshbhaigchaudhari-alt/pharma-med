import { Helmet } from 'react-helmet-async';
import { site } from '../../data/site';

export default function Seo({ title, description, path = '', jsonLd }) {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | Pharmacy College in Ahmedabad`;
  const url = `${site.url}${path}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${site.url}/images/hero-medical-students.jpg`} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
