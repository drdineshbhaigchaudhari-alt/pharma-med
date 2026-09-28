# Images

All photos live in `client/public/images/`. They are referenced **only** from `client/src/data/images.js`.

Every current photo is a free-licence image from [Pexels](https://www.pexels.com/license/) showing Indian students or professionals. Credit is not required, but each photographer is listed below.

To swap in a Freepik image, download it (with a valid Freepik licence), save it under the **same file name**, and you're done. If you use a new file name, change the `src` in `images.js` instead.

| File | Used on | Pexels source (photographer) | Suggested Freepik search |
|---|---|---|---|
| hero-medical-students.jpg | Home hero, Pharm.D, Admissions | pexels.com/photo/34212681 (A K G Group Of Colleges) | "indian pharmacy students lab coat practical" |
| lab-students.jpg | B.Pharm, labs, Apply, Research | pexels.com/photo/37765899 (Poddar Group of Institutions) | "indian students chemistry laboratory experiment" |
| lab-scientist.jpg | M.Pharm, Research, Home | pexels.com/photo/14797915 (World Sikh Organization of Canada) | "indian scientist pipette laboratory" |
| lab-shelves.jpg | Chemistry lab card | pexels.com/photo/11703173 (Nishant Aneja) | "pharmaceutical laboratory reagent bottles" |
| pharmacist-counter.jpg | D.Pharm, Model Pharmacy | pexels.com/photo/14797862 (World Sikh Organization of Canada) | "indian pharmacist medical store counter" |
| pharmacist-portrait.jpg | (spare) | pexels.com/photo/14797861 (World Sikh Organization of Canada) | "indian pharmacist portrait white coat" |
| campus-students.jpg | About hero, Campus Life | pexels.com/photo/39006532 | "indian college students campus group" |
| campus-study.jpg | Home slider, Contact | pexels.com/photo/4622108 (Kiran Pokuri Photography) | "indian students studying campus lawn laptop" |
| library-student.jpg | Library, Enquire | pexels.com/photo/16504588 | "indian girl student reading library" |
| graduates.jpg | Placements hero, Home stats band | pexels.com/photo/37410979 (Raju) | "indian graduates convocation smiling" |
| students-celebrate.jpg | Campus Life hero, CTA band | pexels.com/photo/31968811 (Yash Bakode) | "indian college students celebration farewell" |

## Faculty photos (representative stock images)

The photos in `client/public/images/faculty/` are free stock photos of Indian professionals, **not the actual faculty members**. Every card shows a "Representative image" label for that reason. Replace each file with the real person's photo (same file name) and remove `representative: true` from their entry in `client/src/data/faculty.js`.

| File | Pexels source (photographer) |
|---|---|
| karan-gupta.jpg | pexels.com/photo/37894130 (Vishal Kampani) |
| amit-goyal.jpg | pexels.com/photo/9127300 (Shailesh Mishra) |
| hitesh-kumar.jpg | pexels.com/photo/13439447 (USBofPhotography) |
| tn-bansal.jpg | pexels.com/photo/27298085 (Sagar Tiwari) |
| sunit-bean.jpg | pexels.com/photo/36781276 (ShootSaga) |
| mohit-rehija.jpg | pexels.com/photo/31695306 (ShootSaga) |
| preem-sood.jpg | pexels.com/photo/7580937 (RDNE) |
| vijay-kukraja.jpg | pexels.com/photo/9171219 (MrLokesh Tiwari) |

## Still needed from the university
- Real photos of all faculty members (see above).
- Official approval logos (PCI, AICTE, NAAC, ...). These are text badges for now.
- Real campus photographs. These should replace the stock photos before launch, since stock images show other campuses.
