// Central site details. PLACEHOLDER values (phones, emails, stats, approvals) should be confirmed before launch.
export const site = {
  name: 'Pharma Med University',
  shortName: 'PMU',
  tagline: 'Where Science Meets Care',
  domain: 'pharmameduniversity.com',
  url: 'https://pharmameduniversity.com',
  established: 2009,
  address: {
    line1: 'Bata Gale, Netaji Road',
    line2: 'Ellisbridge',
    city: 'Ahmedabad',
    state: 'Gujarat',
    pin: '380006',
    full: 'Bata Gale, Netaji Road, Ellisbridge, Ahmedabad, Gujarat 380006',
  },
  phones: { admissions: '+91 79 4000 1234', office: '+91 79 4000 1200', mobile: '+91 98250 00000' },
  emails: {
    admissions: 'registrar@pharmameduniversity.com', // Registrar handles admissions
    info: 'info@pharmameduniversity.com',
    placements: 'prof.ajaykumar@pharmameduniversity.com',
    hr: 'hr@pharmameduniversity.com',
  },
  placementOfficer: { name: 'Prof. Ajay Kumar', title: 'Training & Placement Officer' },
  hours: 'Mon – Sat, 9:30 AM – 5:30 PM',
  mapEmbed:
    'https://www.google.com/maps?q=Netaji+Road,+Ellisbridge,+Ahmedabad,+Gujarat+380006&output=embed',
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
    youtube: 'https://youtube.com/',
  },
};

export const stats = [
  { value: 17, suffix: '+', label: 'Years of Excellence' },
  { value: 1800, suffix: '+', label: 'Students on Campus' },
  { value: 65, suffix: '+', label: 'Expert Faculty' },
  { value: 92, suffix: '%', label: 'Placement Record' },
];

// Generic text badges - replace with official logos once approvals are confirmed.
export const approvals = [
  { short: 'PCI', long: 'Pharmacy Council of India Approved' },
  { short: 'AICTE', long: 'All India Council for Technical Education' },
  { short: 'NAAC', long: 'Accredited Grade A+' },
  { short: 'NBA', long: 'B.Pharm Programme Accredited' },
  { short: 'UGC', long: 'Recognised under Section 2(f)' },
  { short: 'GSIRF', long: '5-Star Rated Institution' },
];

export const nav = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'About PMU', to: '/about' },
      { label: 'Vision & Mission', to: '/about#vision' },
      { label: "Director's Message", to: '/about#director' },
      { label: 'Approvals & Accreditation', to: '/about#approvals' },
    ],
  },
  {
    label: 'Programmes',
    to: '/programmes/bachelor-of-pharmacy',
    children: [
      { label: 'Bachelor of Pharmacy (B.Pharm)', to: '/programmes/bachelor-of-pharmacy' },
      { label: 'Master of Pharmacy (M.Pharm)', to: '/programmes/master-of-pharmacy' },
      { label: 'Doctor of Pharmacy (Pharm.D)', to: '/programmes/doctor-of-pharmacy' },
      { label: 'Diploma in Pharmacy (D.Pharm)', to: '/programmes/diploma-in-pharmacy' },
    ],
  },
  {
    label: 'Admissions & Aid',
    to: '/admissions',
    children: [
      { label: 'Admission Overview', to: '/admissions' },
      { label: 'Scholarships & Aid', to: '/admissions#scholarships' },
      { label: 'Documents Checklist', to: '/admissions#documents' },
      { label: 'Apply Online', to: '/apply' },
    ],
  },
  { label: 'Campus Life', to: '/campus-life' },
  { label: 'Research', to: '/research' },
  { label: 'Placements', to: '/placements' },
  { label: 'Contact', to: '/contact' },
];

export const notices = [
  'B.Pharm Admissions 2026-27: NRI / NRI-Sponsored applications open till 10 August 2026',
  'ACPC Round 2 vacant seat counselling - reporting on 18 August 2026',
  'M.Pharm GPAT merit list for Institute-level seats will be published on 25 August 2026',
  'Orientation programme for first-year students begins 1 September 2026',
  'National Seminar on "AI in Drug Discovery" - 14 October 2026, register now',
];
