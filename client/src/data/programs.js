// All programme content. Fees, dates, intake and seat numbers are PLACEHOLDERS to be confirmed by the university.
import { images } from './images';

const T = 'Theory';
const P = 'Practical';

export const programs = [
  {
    slug: 'bachelor-of-pharmacy',
    code: 'B.Pharm',
    name: 'Bachelor of Pharmacy',
    level: 'Under Graduate',
    duration: '4 Years (8 Semesters)',
    intake: 100,
    approval: 'Approved by PCI, New Delhi',
    image: images.labStudents,
    admissionOpen: true,
    tagline: 'Build a career at the heart of healthcare, from the laboratory bench to the patient’s bedside.',
    overview: [
      'The Bachelor of Pharmacy (B.Pharm) at Pharma Med University is a four-year, eight-semester undergraduate programme approved by the Pharmacy Council of India (PCI). It gives students a strong base in pharmaceutics, pharmaceutical chemistry, pharmacology and pharmacognosy, and the practical skills today’s pharmaceutical industry and healthcare system need.',
      'Teaching mixes classroom learning with long hours in well-equipped laboratories, industrial visits to Gujarat’s pharma hubs, hospital training and a final-year research project. Students graduate ready for industry, community and hospital pharmacy, regulatory affairs, or higher studies such as M.Pharm, MBA (Pharma) and MS abroad.',
    ],
    highlights: [
      { label: 'Duration', value: '4 Years' },
      { label: 'Total Intake', value: '100 Seats' },
      { label: 'Approval', value: 'PCI' },
      { label: 'Admission via', value: 'ACPC / GUJCET' },
    ],
    seatMatrix: {
      note: 'Total intake of 100 seats, distributed as follows:',
      columns: ['Category', 'Seats', 'Admission Through'],
      rows: [
        ['Gujarat State Quota (ACPC)', '85', 'Admission Committee for Professional Courses (ACPC), Gujarat'],
        ['NRI / NRI-Sponsored', '15', 'Directly by Pharma Med University'],
        ['International (Supernumerary)', '15', 'Directly by Pharma Med University (CIWGC, OCI, PIO, FN)'],
      ],
    },
    dates: [
      {
        title: 'NRI / NRI-Sponsored Seats',
        rows: [
          ['Online application opens', '05 May 2026'],
          ['Last date to apply', '10 August 2026'],
          ['Provisional merit list', '14 August 2026'],
          ['Admission confirmation & fee payment', '17 – 20 August 2026'],
        ],
      },
      {
        title: 'Vacant Seats (after ACPC)',
        rows: [
          ['Application window', '25 August – 05 September 2026'],
          ['Merit list display', '08 September 2026'],
          ['Counselling & reporting', '10 – 12 September 2026'],
          ['Commencement of classes', '15 September 2026'],
        ],
      },
    ],
    fees: {
      year: '2026-27',
      tuition: {
        columns: ['Category', 'Per Semester', 'Per Year'],
        rows: [
          ['Indian Students (ACPC / Vacant)', '₹ 72,500', '₹ 1,45,000'],
          ['NRI / NRI-Sponsored / International', 'USD 2,750', 'USD 5,500'],
        ],
      },
      other: {
        columns: ['Particulars', 'Amount', 'Frequency'],
        rows: [
          ['Enrolment Fee', '₹ 1,000', 'One time'],
          ['Examination Fee', '₹ 3,000', 'Per semester'],
          ['Induction & Orientation', '₹ 1,500', 'One time'],
          ['Student Welfare & Activities', '₹ 2,500', 'Per year'],
          ['Alumni Association Membership', '₹ 2,000', 'One time'],
          ['Caution Deposit (Refundable)', '₹ 5,000', 'One time'],
        ],
      },
      note: 'Fees for ACPC seats follow the Fee Regulatory Committee (FRC), Gujarat. Hostel and transport fees are charged separately.',
    },
    eligibility: [
      {
        title: 'Indian Students (ACPC Seats)',
        items: [
          'Passed 10+2 (HSC) with Physics and Chemistry as compulsory subjects, plus Mathematics or Biology.',
          'At least 45% aggregate in the qualifying subjects (40% for reserved categories), as per ACPC rules.',
          'Appeared in GUJCET (Gujarat Common Entrance Test) of the current year.',
          'Registered on the ACPC portal for the centralised admission process.',
        ],
      },
      {
        title: 'NRI Candidates',
        items: [
          'Candidates who studied abroad and hold NRI status do not need NEET / JEE / GUJCET.',
          'NRI candidates who studied in India must have a valid NEET / JEE (Main) / GUJCET score.',
          'Qualifying exam equivalent to Indian 10+2 with Physics, Chemistry and Biology / Mathematics.',
        ],
      },
      {
        title: 'NRI-Sponsored Candidates',
        items: [
          'Passed 10+2 from a recognised Indian board.',
          'Valid All India Rank / score in NEET, JEE (Main) or GUJCET.',
          'A sponsorship letter from a first-degree relative who is an NRI, undertaking to pay the full programme fees.',
        ],
      },
    ],
    process: [
      { title: 'Register Online', text: 'Fill in the online application form on the Pharma Med University admission portal with your personal and academic details.' },
      { title: 'Pay Application Fee', text: '₹ 500 for candidates from Gujarat and ₹ 1,000 for candidates from other states or abroad, paid online.' },
      { title: 'Upload Documents', text: 'Upload your mark sheets, entrance scorecard, ID proof, photograph and, for NRI categories, your passport and visa copies.' },
      { title: 'Merit List', text: 'The provisional merit list is published on the website and emailed to shortlisted candidates.' },
      { title: 'Confirm Admission', text: 'Report with original documents for verification and pay the first-semester fee to secure your seat.' },
    ],
    merit: [
      { category: 'ACPC Seats', formula: 'Prepared by ACPC Gujarat: 50% weight to HSC theory marks + 50% to GUJCET score.' },
      { category: 'NRI', formula: 'Percentage of marks in Physics, Chemistry and Biology / Mathematics in the qualifying 12th-standard exam.' },
      { category: 'NRI-Sponsored', formula: '50% weight to entrance exam percentile (NEET / JEE / GUJCET) + 50% to 12th-standard PCB / PCM percentile.' },
    ],
    international: {
      intro: 'In line with Ministry of Education guidelines, 15% supernumerary seats are reserved for international candidates in the following categories:',
      columns: ['Category', 'Description', 'Share'],
      rows: [
        ['CIWGC', 'Children of Indian Workers in Gulf Countries & South-East Asia', '5%'],
        ['OCI / PIO', 'Overseas Citizens of India / Persons of Indian Origin', '5%'],
        ['FN', 'Foreign Nationals', '5%'],
      ],
    },
    syllabus: [
      { term: 'Semester I', subjects: [['BP101T', 'Human Anatomy and Physiology I', T, 4], ['BP102T', 'Pharmaceutical Analysis I', T, 4], ['BP103T', 'Pharmaceutics I', T, 4], ['BP104T', 'Pharmaceutical Inorganic Chemistry', T, 4], ['BP105T', 'Communication Skills', T, 2], ['BP106RBT', 'Remedial Biology / Mathematics', T, 2], ['BP107P', 'Human Anatomy and Physiology I', P, 2], ['BP108P', 'Pharmaceutical Analysis I', P, 2], ['BP109P', 'Pharmaceutics I', P, 2], ['BP110P', 'Pharmaceutical Inorganic Chemistry', P, 2]] },
      { term: 'Semester II', subjects: [['BP201T', 'Human Anatomy and Physiology II', T, 4], ['BP202T', 'Pharmaceutical Organic Chemistry I', T, 4], ['BP203T', 'Biochemistry', T, 4], ['BP204T', 'Pathophysiology', T, 4], ['BP205T', 'Computer Applications in Pharmacy', T, 3], ['BP206T', 'Environmental Sciences', T, 3], ['BP207P', 'Human Anatomy and Physiology II', P, 2], ['BP208P', 'Pharmaceutical Organic Chemistry I', P, 2], ['BP209P', 'Biochemistry', P, 2], ['BP210P', 'Computer Applications in Pharmacy', P, 1]] },
      { term: 'Semester III', subjects: [['BP301T', 'Pharmaceutical Organic Chemistry II', T, 4], ['BP302T', 'Physical Pharmaceutics I', T, 4], ['BP303T', 'Pharmaceutical Microbiology', T, 4], ['BP304T', 'Pharmaceutical Engineering', T, 4], ['BP305P', 'Pharmaceutical Organic Chemistry II', P, 2], ['BP306P', 'Physical Pharmaceutics I', P, 2], ['BP307P', 'Pharmaceutical Microbiology', P, 2], ['BP308P', 'Pharmaceutical Engineering', P, 2]] },
      { term: 'Semester IV', subjects: [['BP401T', 'Pharmaceutical Organic Chemistry III', T, 4], ['BP402T', 'Medicinal Chemistry I', T, 4], ['BP403T', 'Physical Pharmaceutics II', T, 4], ['BP404T', 'Pharmacology I', T, 4], ['BP405T', 'Pharmacognosy and Phytochemistry I', T, 4], ['BP406P', 'Medicinal Chemistry I', P, 2], ['BP407P', 'Physical Pharmaceutics II', P, 2], ['BP408P', 'Pharmacology I', P, 2], ['BP409P', 'Pharmacognosy and Phytochemistry I', P, 2]] },
      { term: 'Semester V', subjects: [['BP501T', 'Medicinal Chemistry II', T, 4], ['BP502T', 'Industrial Pharmacy I', T, 4], ['BP503T', 'Pharmacology II', T, 4], ['BP504T', 'Pharmacognosy and Phytochemistry II', T, 4], ['BP505T', 'Pharmaceutical Jurisprudence', T, 4], ['BP506P', 'Industrial Pharmacy I', P, 2], ['BP507P', 'Pharmacology II', P, 2], ['BP508P', 'Pharmacognosy and Phytochemistry II', P, 2]] },
      { term: 'Semester VI', subjects: [['BP601T', 'Medicinal Chemistry III', T, 4], ['BP602T', 'Pharmacology III', T, 4], ['BP603T', 'Herbal Drug Technology', T, 4], ['BP604T', 'Biopharmaceutics and Pharmacokinetics', T, 4], ['BP605T', 'Pharmaceutical Biotechnology', T, 4], ['BP606T', 'Quality Assurance', T, 4], ['BP607P', 'Medicinal Chemistry III', P, 2], ['BP608P', 'Pharmacology III', P, 2], ['BP609P', 'Herbal Drug Technology', P, 2]] },
      { term: 'Semester VII', subjects: [['BP701T', 'Instrumental Methods of Analysis', T, 4], ['BP702T', 'Industrial Pharmacy II', T, 4], ['BP703T', 'Pharmacy Practice', T, 4], ['BP704T', 'Novel Drug Delivery System', T, 4], ['BP705P', 'Instrumental Methods of Analysis', P, 2], ['BP706PS', 'Practice School', P, 6]] },
      { term: 'Semester VIII', subjects: [['BP801T', 'Biostatistics and Research Methodology', T, 4], ['BP802T', 'Social and Preventive Pharmacy', T, 4], ['BP8XXT', 'Elective I (e.g. Pharma Marketing Management)', T, 4], ['BP8XXT', 'Elective II (e.g. Cosmetic Science)', T, 4], ['BP813PW', 'Project Work', P, 6]] },
    ],
    careers: ['Formulation Scientist', 'Quality Control Analyst', 'Clinical Research Associate', 'Hospital & Community Pharmacist', 'Drug Regulatory Affairs Executive', 'Medical Representative / Pharma Marketing', 'Pharmacovigilance Associate', 'Drug Inspector (via state exams)'],
    faqs: [
      { q: 'Is GUJCET compulsory for B.Pharm admission?', a: 'Yes. For the 85 Gujarat-quota seats allotted through ACPC, GUJCET is compulsory. NRI candidates who studied abroad are exempt.' },
      { q: 'Can a student with PCM (Mathematics) apply for B.Pharm?', a: 'Yes. Students with either PCB or PCM in 12th standard are eligible. PCM students take Remedial Biology in Semester I.' },
      { q: 'Is hostel accommodation available?', a: 'Yes. Separate hostels for boys and girls are available near the campus, with mess, Wi-Fi and 24×7 security. Hostel seats are allotted first come, first served.' },
      { q: 'Are scholarships available?', a: 'Eligible students can apply for MYSY, Digital Gujarat post-matric, and central government scholarships, plus Pharma Med University merit scholarships for toppers.' },
    ],
  },
  {
    slug: 'master-of-pharmacy',
    code: 'M.Pharm',
    name: 'Master of Pharmacy',
    level: 'Post Graduate',
    duration: '2 Years (4 Semesters)',
    intake: 60,
    approval: 'Approved by PCI, New Delhi',
    image: images.labScientist,
    admissionOpen: true,
    tagline: 'Specialise, research and lead in pharmaceutical sciences.',
    overview: [
      'The two-year Master of Pharmacy (M.Pharm) programme builds deep expertise in a chosen specialisation through advanced coursework, hands-on work with modern instruments and a full year of research leading to a dissertation.',
      'Students work on real problems in formulation development, analytical method validation, pre-clinical pharmacology and regulatory science. Many projects are run with industry partners across the Ahmedabad–Vadodara pharma corridor.',
    ],
    highlights: [
      { label: 'Duration', value: '2 Years' },
      { label: 'Total Intake', value: '60 Seats' },
      { label: 'Specialisations', value: '4' },
      { label: 'Admission via', value: 'GPAT / ACPC' },
    ],
    seatMatrix: {
      note: 'Specialisation-wise intake:',
      columns: ['Specialisation', 'Seats', 'Admission Through'],
      rows: [
        ['Pharmaceutics', '18', 'ACPC (PG) & Institute level'],
        ['Pharmacology', '15', 'ACPC (PG) & Institute level'],
        ['Pharmaceutical Quality Assurance', '15', 'ACPC (PG) & Institute level'],
        ['Pharmaceutical Chemistry', '12', 'ACPC (PG) & Institute level'],
      ],
    },
    dates: [
      {
        title: 'M.Pharm Admissions 2026',
        rows: [
          ['Online application opens', '15 June 2026'],
          ['Last date to apply (Institute level)', '31 July 2026'],
          ['Merit list (GPAT / non-GPAT)', '25 August 2026'],
          ['Commencement of classes', '15 September 2026'],
        ],
      },
    ],
    fees: {
      year: '2026-27',
      tuition: {
        columns: ['Category', 'Per Semester', 'Per Year'],
        rows: [
          ['Indian Students', '₹ 85,000', '₹ 1,70,000'],
          ['NRI / International', 'USD 3,000', 'USD 6,000'],
        ],
      },
      other: {
        columns: ['Particulars', 'Amount', 'Frequency'],
        rows: [
          ['Enrolment Fee', '₹ 1,000', 'One time'],
          ['Examination Fee', '₹ 3,500', 'Per semester'],
          ['Research & Laboratory Consumables', '₹ 5,000', 'Per year'],
          ['Caution Deposit (Refundable)', '₹ 5,000', 'One time'],
        ],
      },
      note: 'GPAT-qualified students may be eligible for the AICTE PG scholarship, as per AICTE norms.',
    },
    eligibility: [
      {
        title: 'Academic Eligibility',
        items: [
          'B.Pharm from a PCI-approved institution with at least 55% aggregate (50% for reserved categories).',
          'Registered as a pharmacist with a State Pharmacy Council (or applied for registration).',
          'A valid GPAT score is preferred. Non-GPAT candidates are admitted to vacant seats on merit.',
        ],
      },
    ],
    process: [
      { title: 'Apply Online', text: 'Choose your specialisation and submit the online application with your B.Pharm mark sheets.' },
      { title: 'GPAT / Merit Ranking', text: 'Candidates are ranked by GPAT score first, then by B.Pharm aggregate for non-GPAT seats.' },
      { title: 'Personal Interaction', text: 'Short interaction with the department panel to discuss research interests.' },
      { title: 'Confirm Seat', text: 'Verify documents and pay the fee to confirm your admission.' },
    ],
    merit: [
      { category: 'GPAT Candidates', formula: 'Ranked by GPAT score of the current or previous two years.' },
      { category: 'Non-GPAT Candidates', formula: 'Aggregate percentage of B.Pharm (all eight semesters).' },
    ],
    syllabus: [
      { term: 'Semester I', subjects: [['MPH101T', 'Modern Pharmaceutical Analytical Techniques', T, 4], ['MPH102T', 'Drug Delivery Systems (specialisation core)', T, 4], ['MPH103T', 'Specialisation Core II', T, 4], ['MPH104T', 'Specialisation Core III', T, 4], ['MPH105P', 'Specialisation Practical I', P, 6], ['-', 'Seminar / Assignment', T, 4]] },
      { term: 'Semester II', subjects: [['MPH201T', 'Specialisation Core IV', T, 4], ['MPH202T', 'Specialisation Core V', T, 4], ['MPH203T', 'Specialisation Core VI', T, 4], ['MPH204T', 'Specialisation Core VII', T, 4], ['MPH205P', 'Specialisation Practical II', P, 6], ['-', 'Seminar / Assignment', T, 4]] },
      { term: 'Semester III', subjects: [['MRM301T', 'Research Methodology & Biostatistics', T, 4], ['-', 'Journal Club', T, 1], ['-', 'Discussion / Presentation (Proposal)', T, 2], ['-', 'Research Work', P, 14]] },
      { term: 'Semester IV', subjects: [['-', 'Journal Club', T, 1], ['-', 'Research Work & Dissertation', P, 16], ['-', 'Discussion / Final Presentation', T, 3]] },
    ],
    careers: ['Research Scientist (R&D)', 'Analytical Development Scientist', 'Assistant Professor', 'Regulatory Affairs Manager', 'Clinical Data Manager', 'Production / QA Manager', 'Ph.D in India or abroad'],
    faqs: [
      { q: 'Is GPAT mandatory for M.Pharm?', a: 'GPAT is not strictly mandatory. GPAT-qualified candidates get priority and may receive the AICTE scholarship. Remaining seats are filled on B.Pharm merit.' },
      { q: 'Can I change my specialisation after admission?', a: 'Specialisation changes are allowed only during the first two weeks, depending on seat availability.' },
    ],
  },
  {
    slug: 'doctor-of-pharmacy',
    code: 'Pharm.D',
    name: 'Doctor of Pharmacy',
    level: 'Under Graduate (Professional Doctorate)',
    duration: '6 Years (5 + 1 Year Internship)',
    intake: 30,
    approval: 'Approved by PCI, New Delhi',
    image: images.heroStudents,
    admissionOpen: true,
    tagline: 'Become the clinical pharmacist every hospital team relies on.',
    overview: [
      'The Doctor of Pharmacy (Pharm.D) is a six-year professional programme focused on clinical pharmacy and patient care. It has five years of academic study, including hospital postings, followed by a one-year internship in a tertiary-care teaching hospital.',
      'Pharm.D graduates work alongside physicians and nurses to optimise drug therapy, monitor adverse drug reactions, counsel patients and take part in clinical research. The role is in high demand in India and abroad.',
    ],
    highlights: [
      { label: 'Duration', value: '6 Years' },
      { label: 'Total Intake', value: '30 Seats' },
      { label: 'Internship', value: '1 Year (Hospital)' },
      { label: 'Admission via', value: 'ACPC / NEET' },
    ],
    seatMatrix: {
      columns: ['Category', 'Seats', 'Admission Through'],
      rows: [
        ['Gujarat State Quota (ACPC)', '25', 'ACPC, Gujarat'],
        ['NRI / NRI-Sponsored', '5', 'Directly by Pharma Med University'],
      ],
    },
    dates: [
      {
        title: 'Pharm.D Admissions 2026',
        rows: [
          ['Online application opens', '05 May 2026'],
          ['Last date (NRI categories)', '10 August 2026'],
          ['Commencement of classes', '15 September 2026'],
        ],
      },
    ],
    fees: {
      year: '2026-27',
      tuition: {
        columns: ['Category', 'Per Semester', 'Per Year'],
        rows: [
          ['Indian Students', '₹ 90,000', '₹ 1,80,000'],
          ['NRI / International', 'USD 3,250', 'USD 6,500'],
        ],
      },
      other: {
        columns: ['Particulars', 'Amount', 'Frequency'],
        rows: [
          ['Enrolment Fee', '₹ 1,000', 'One time'],
          ['Examination Fee', '₹ 4,000', 'Per year'],
          ['Hospital Training Fee', '₹ 10,000', 'Per year (Years 4–6)'],
          ['Caution Deposit (Refundable)', '₹ 5,000', 'One time'],
        ],
      },
    },
    eligibility: [
      {
        title: 'Academic Eligibility',
        items: [
          'Passed 10+2 with Physics, Chemistry and Biology or Mathematics, with at least 50% aggregate.',
          'Or a D.Pharm from a PCI-approved institution (for Pharm.D Post-Baccalaureate / lateral entry, as per PCI rules).',
          'Minimum age of 17 years on 31 December of the admission year.',
        ],
      },
    ],
    process: [
      { title: 'Register', text: 'Register on the ACPC portal (Gujarat quota) or apply directly for NRI seats.' },
      { title: 'Merit & Allotment', text: 'Seats are allotted on merit as per ACPC / institute rules.' },
      { title: 'Report & Confirm', text: 'Report to the university with your original documents and pay the fees.' },
    ],
    merit: [{ category: 'All Categories', formula: 'As per ACPC Gujarat: HSC PCB/PCM theory marks and GUJCET / NEET score.' }],
    syllabus: [
      { term: 'Year I', subjects: [['1.1', 'Human Anatomy & Physiology', T, 3], ['1.2', 'Pharmaceutics', T, 2], ['1.3', 'Medicinal Biochemistry', T, 3], ['1.4', 'Pharmaceutical Organic Chemistry', T, 3], ['1.5', 'Pharmaceutical Inorganic Chemistry', T, 2], ['1.6', 'Remedial Mathematics / Biology', T, 3]] },
      { term: 'Year II', subjects: [['2.1', 'Pathophysiology', T, 3], ['2.2', 'Pharmaceutical Microbiology', T, 3], ['2.3', 'Pharmacognosy & Phytopharmaceuticals', T, 3], ['2.4', 'Pharmacology I', T, 2], ['2.5', 'Community Pharmacy', T, 2], ['2.6', 'Pharmacotherapeutics I', T, 3]] },
      { term: 'Year III', subjects: [['3.1', 'Pharmacology II', T, 3], ['3.2', 'Pharmaceutical Analysis', T, 3], ['3.3', 'Pharmacotherapeutics II', T, 3], ['3.4', 'Pharmaceutical Jurisprudence', T, 2], ['3.5', 'Medicinal Chemistry', T, 3], ['3.6', 'Pharmaceutical Formulations', T, 2]] },
      { term: 'Year IV', subjects: [['4.1', 'Pharmacotherapeutics III', T, 3], ['4.2', 'Hospital Pharmacy', T, 2], ['4.3', 'Clinical Pharmacy', T, 3], ['4.4', 'Biostatistics & Research Methodology', T, 2], ['4.5', 'Biopharmaceutics & Pharmacokinetics', T, 3], ['4.6', 'Clinical Toxicology', T, 2]] },
      { term: 'Year V', subjects: [['5.1', 'Clinical Research', T, 3], ['5.2', 'Pharmacoepidemiology & Pharmacoeconomics', T, 3], ['5.3', 'Clinical Pharmacokinetics & TDM', T, 2], ['5.4', 'Clerkship (Hospital Postings)', P, '—'], ['5.5', 'Project Work (6 months)', P, '—']] },
      { term: 'Year VI', subjects: [['6.1', 'Internship: General Medicine', P, '—'], ['6.2', 'Internship: Speciality Departments', P, '—']] },
    ],
    careers: ['Clinical Pharmacist', 'Drug Information Specialist', 'Pharmacovigilance Scientist', 'Clinical Research Coordinator', 'Medical Writer', 'Health-economics & Outcomes Analyst', 'Licensure pathways abroad (USA, Canada, Australia, Gulf)'],
    faqs: [
      { q: 'Can Pharm.D graduates use the title “Dr.”?', a: 'Yes. Under PCI regulations, Pharm.D graduates may use the prefix “Dr.”.' },
      { q: 'Where is the internship done?', a: 'In partner multi-speciality teaching hospitals in Ahmedabad, rotating through medicine, paediatrics, surgery and other departments.' },
    ],
  },
  {
    slug: 'diploma-in-pharmacy',
    code: 'D.Pharm',
    name: 'Diploma in Pharmacy',
    level: 'Diploma',
    duration: '2 Years + 500 Hours Training',
    intake: 60,
    approval: 'Approved by PCI, New Delhi',
    image: images.pharmacistCounter,
    admissionOpen: true,
    tagline: 'The fastest route to becoming a registered pharmacist.',
    overview: [
      'The two-year Diploma in Pharmacy (D.Pharm) prepares students to work as registered pharmacists in retail and hospital pharmacies. It covers dispensing, drug storage, pharmacy law and patient counselling, followed by 500 hours of practical training.',
      'D.Pharm holders can register with the Gujarat State Pharmacy Council, open their own pharmacy, or join B.Pharm directly in the second year through lateral entry.',
    ],
    highlights: [
      { label: 'Duration', value: '2 Years' },
      { label: 'Total Intake', value: '60 Seats' },
      { label: 'Training', value: '500 Hours' },
      { label: 'Admission via', value: 'Merit (12th)' },
    ],
    seatMatrix: {
      columns: ['Category', 'Seats', 'Admission Through'],
      rows: [
        ['Gujarat State Quota', '51', 'ACPC / Diploma admission committee'],
        ['Management / NRI', '9', 'Directly by Pharma Med University'],
      ],
    },
    dates: [
      {
        title: 'D.Pharm Admissions 2026',
        rows: [
          ['Online application opens', '01 June 2026'],
          ['Last date to apply', '31 July 2026'],
          ['Commencement of classes', '01 September 2026'],
        ],
      },
    ],
    fees: {
      year: '2026-27',
      tuition: {
        columns: ['Category', 'Per Semester', 'Per Year'],
        rows: [['Indian Students', '₹ 30,000', '₹ 60,000']],
      },
      other: {
        columns: ['Particulars', 'Amount', 'Frequency'],
        rows: [
          ['Enrolment Fee', '₹ 500', 'One time'],
          ['Examination Fee', '₹ 2,000', 'Per year'],
          ['Caution Deposit (Refundable)', '₹ 3,000', 'One time'],
        ],
      },
    },
    eligibility: [
      { title: 'Academic Eligibility', items: ['Passed 10+2 in Science with Physics, Chemistry and Biology or Mathematics.', 'Minimum 40% aggregate in the qualifying subjects.'] },
    ],
    process: [
      { title: 'Apply', text: 'Apply online or through the state diploma admission process.' },
      { title: 'Merit List', text: 'Merit is prepared from 12th-standard science marks.' },
      { title: 'Confirm', text: 'Verify documents and pay the fees.' },
    ],
    merit: [{ category: 'All Categories', formula: 'Aggregate percentage in Physics, Chemistry and Biology / Mathematics in 12th standard.' }],
    syllabus: [
      { term: 'Part I (Year 1)', subjects: [['ER20-11T', 'Pharmaceutics', T, '—'], ['ER20-12T', 'Pharmaceutical Chemistry', T, '—'], ['ER20-13T', 'Pharmacognosy', T, '—'], ['ER20-14T', 'Human Anatomy & Physiology', T, '—'], ['ER20-15T', 'Social Pharmacy', T, '—']] },
      { term: 'Part II (Year 2)', subjects: [['ER20-21T', 'Pharmacology', T, '—'], ['ER20-22T', 'Community Pharmacy & Management', T, '—'], ['ER20-23T', 'Biochemistry & Clinical Pathology', T, '—'], ['ER20-24T', 'Pharmacotherapeutics', T, '—'], ['ER20-25T', 'Hospital & Clinical Pharmacy', T, '—'], ['ER20-26T', 'Pharmacy Law & Ethics', T, '—']] },
    ],
    careers: ['Registered Pharmacist', 'Own Retail Pharmacy', 'Hospital Pharmacy Assistant', 'Medical Store Manager', 'Lateral entry to B.Pharm'],
    faqs: [
      { q: 'Can I get lateral entry into B.Pharm after D.Pharm?', a: 'Yes. D.Pharm holders can be admitted directly to the second year (Semester III) of B.Pharm, subject to seat availability.' },
    ],
  },
];

export const getProgram = (slug) => programs.find((p) => p.slug === slug);
