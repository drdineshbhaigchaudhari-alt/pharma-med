// Faculty & staff directory. PLACEHOLDER emails follow the site's existing pattern
// (e.g. prof.ajaykumar@pharmameduniversity.com); create these mailboxes before launch.
// Photos: the current photos are free stock images (see IMAGES.md), NOT the actual faculty,
// so each card is labelled "Representative image". When a real photo arrives, overwrite the file
// in /public/images/faculty/ and delete `representative: true` from that entry.
const domain = 'pharmameduniversity.com';

export const faculty = [
  { name: 'Dr. Karan Gupta', designation: 'Associate Professor, Dean and Head', featured: true,
    qualifications: 'M.Pharm., Ph.D. (Dr. H. S. Gour University, Sagar, India); Postdoc, South Dakota State University, USA (2012–2013)',
    email: `dr.karangupta@${domain}`,
    photo: '/images/faculty/karan-gupta.jpg', representative: true },
  { name: 'Prof. Amit Goyal', designation: '', featured: true,
    qualifications: 'M.Pharm., Ph.D.',
    email: `prof.amitgoyal@${domain}`,
    photo: '/images/faculty/amit-goyal.jpg', representative: true },
  { name: 'Prof. Hitesh Kumar', designation: 'Professor', featured: true,
    qualifications: 'M.Pharm. (Pharmaceutical Chemistry), Ph.D.',
    email: `prof.hiteshkumar@${domain}`,
    photo: '/images/faculty/hitesh-kumar.jpg', representative: true },
  { name: 'Dr. T. N. Bansal', designation: '', featured: true,
    qualifications: 'Ph.D., MD',
    email: `dr.tnbansal@${domain}`,
    photo: '/images/faculty/tn-bansal.jpg', representative: true },
  { name: 'Dr. Sunit Bean', designation: 'Associate Professor',
    qualifications: 'Ph.D. (Central Drug Research Institute, Lucknow)',
    email: `dr.sunitbean@${domain}`,
    photo: '/images/faculty/sunit-bean.jpg', representative: true },
  { name: 'Dr. Mohit Rehija', designation: 'Associate Professor',
    qualifications: 'Ph.D.',
    email: `dr.mohitrehija@${domain}`,
    photo: '/images/faculty/mohit-rehija.jpg', representative: true },
  { name: 'Dr. Preem Sood', designation: 'Assistant Professor',
    qualifications: 'Ph.D. (Panjab University, Chandigarh); Post-doctoral research, University of Florence, Italy (2013)',
    email: `dr.preemsood@${domain}`,
    photo: '/images/faculty/preem-sood.jpg', representative: true },
  { name: 'Dr. Vijay Kukraja', designation: 'Assistant Professor',
    qualifications: 'M.Pharm., Ph.D., Post-doc (Panjab University); PGDIPR (NALSAR)',
    email: `dr.vijaykukraja@${domain}`,
    photo: '/images/faculty/vijay-kukraja.jpg', representative: true },
];
