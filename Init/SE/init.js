import dotenv from 'dotenv'; // Note: You need the full import now

// Calculate the path to the project root directory
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// The .env file is 3 levels up from the current file's directory:
// init.js -> Init/SE/init.js
// .env is in -> Simply-Saral_next/
const envPath = resolve(__dirname, '../../.env'); 

dotenv.config({ path: envPath });

import connection from "../../lib/conn.js";
import SE from "../../models/SecondaryEducation.js"

const schemes = [
  {
    title: "Vocational Education Scheme (Under NSQF)",
    shortDescription: "Integrates skill-based education with academics for secondary & higher secondary students to boost employability.",
    portalLink: "https://www.nsdcindia.org/nsqf",
    detailedDescription:
      "The scheme, introduced by the Ministry of Education & Skill Development, allows students from Classes 9–12 (age 14–18) to enroll in industry-oriented vocational courses (IT, Healthcare, Retail, Agriculture, etc.), with free training, certification, internship, and job placement opportunities. Priority is given to economically weaker sections.",
    benefits: [
      "Industry-Based Training",
      "Multiple Career Options",
      "Free Government Funding",
      "Skill Certification (NSQF Level)",
      "Internship & Job Placement",
    ],
    eligibilityCriteria: [
      "Resident of India",
      "Enrolled in Class 9 to 12 in government-recognized school",
      "Age 14–18 years at enrollment",
      "Minimum 75% attendance in vocational classes",
    ],
    nonEligible: [
      "Students outside Class 9–12",
      "Non-residents of India",
      "Private school students (priority given to government/aided)",
    ],
    requiredDocuments: [
      {
        name: "Aadhaar Card",
        sampleImage: "",
        portalLink: "https://uidai.gov.in",
        videoLink: "https://www.youtube.com/vocational-education-india",
      },
      {
        name: "School ID",
        sampleImage: "",
        portalLink: "https://samagrashiksha.education.gov.in/forms",
        videoLink: "https://www.youtube.com/vocational-education-india",
      },
      {
        name: "Parental Consent Form",
        sampleImage: "",
        portalLink: "https://samagrashiksha.education.gov.in/forms",
        videoLink: "https://www.youtube.com/vocational-education-india",
      },
    ],
    applicationProcess: {
      online: [
        "Register at NSDC Portal.",
        "Choose NSQF-approved program.",
        "Complete application form.",
        "Select vocational course.",
        "Upload required documents.",
        "Submit & track status online.",
      ],
      offline: [
        "Visit school’s vocational education department.",
        "Fill out Vocational Training Enrollment form.",
        "Choose vocational stream.",
        "School coordinates with SSC for certification/training.",
      ],
    },
    faqs: [
      "Q: Is vocational training free?\nA: Yes, for government/aided school students.",
      "Q: What is NSQF certification?\nA: Industry-recognized certificate for skill levels.",
      "Q: What documents are needed?\nA: Aadhaar, School ID, Parental Consent.",
    ],
    imageUrl: "",
    launchedYear: 1986,
    category: "Skill & Employability Enhancement",
    detailedPage: "/schemes/vocational-education-nsqf",
    icon: "GraduationCap",
  },
  {
    title: "Samagra Shiksha Abhiyan (SSA)",
    shortDescription:
      "Government's flagship integrated scheme for accessible, equitable, high-quality school education (pre-primary to Class 12).",
    portalLink: "https://samagrashiksha.education.gov.in",
    detailedDescription:
      "SSA merges key educational initiatives: Sarva Shiksha Abhiyan, RMSA, and Teacher Education. It grants infrastructure funds, digital learning tools, and teacher training in government/aided schools. Students from weaker sections receive extra coaching and financial aid.",
    benefits: [
      "School Infrastructure Development",
      "Digital Classrooms & E-learning",
      "Inclusive Education for Disabled & SC/ST Students",
      "Special Coaching for SC/ST/Girls",
      "Free Uniforms & Textbooks",
    ],
    eligibilityCriteria: [
      "Government or aided school (registered)",
      "School development plan approved",
      "Minimum student attendance as per scheme",
      "Teachers must complete mandatory training",
    ],
    nonEligible: [
      "Private unrecognized schools",
      "Schools without approved development plan",
      "Students without minimum attendance",
    ],
    requiredDocuments: [
      {
        name: "School Registration Certificate",
        sampleImage: "",
        portalLink: "https://samagrashiksha.education.gov.in/forms",
        videoLink: "https://www.youtube.com/ssa-education",
      },
      {
        name: "Teacher Educational Certificates",
        sampleImage: "",
        portalLink: "https://samagrashiksha.education.gov.in/forms",
        videoLink: "https://www.youtube.com/ssa-education",
      },
      {
        name: "Student Aadhaar Card",
        sampleImage: "",
        portalLink: "https://samagrashiksha.education.gov.in/forms",
        videoLink: "https://www.youtube.com/ssa-education",
      },
    ],
    applicationProcess: {
      online: [
        "Register on SSA portal.",
        "Select scheme for infrastructure, training, or aid.",
        "Upload documents.",
        "Submit application & track status online.",
      ],
      offline: [
        "Schools apply via State/District SSA Office.",
        "Submit physical proposals & requests.",
        "District verifies and approves.",
      ],
    },
    faqs: [
      "Q: Who can apply for SSA funds?\nA: Registered government/aided schools.",
      "Q: Are special benefits for girls/disadvantaged?\nA: Yes.",
      "Q: How to check funding status?\nA: Track on SSA portal.",
    ],
    imageUrl: "",
    launchedYear: 2018,
    category: "School Infrastructure Development",
    detailedPage: "/schemes/samagra-shiksha-abhiyan",
    icon: "Building",
  },
  {
    title: "National Means-cum-Merit Scholarship Scheme (NMMSS)",
    shortDescription:
      "Central scholarship scheme for meritorious students from economically weaker sections (Class 9-12).",
    portalLink: "https://scholarships.gov.in/",
    detailedDescription:
      "NMMSS offers ₹12,000/year as support for students passing a merit test and meeting income criteria. Awarded by Direct Benefit Transfer and renewed annually on academic performance.",
    benefits: [
      "Annual Scholarship (₹12,000 via DBT)",
      "Encourages Academic Merit",
      "Reduces Dropout Rate",
      "State-wise Coverage",
    ],
    eligibilityCriteria: [
      "Class 8 student in government/aided/local body schools",
      "Annual family income < ₹3,50,000",
      "Minimum 55% in Class 7 exams (relaxed for SC/ST)",
    ],
    nonEligible: [
      "Students of private schools",
      "Students with family income > ₹3,50,000",
    ],
    requiredDocuments: [
      {
        name: "Student Aadhaar Card",
        sampleImage: "",
        portalLink: "https://uidai.gov.in",
        videoLink: "",
      },
      {
        name: "Income Certificate",
        sampleImage: "",
        portalLink: "https://scholarships.gov.in/",
        videoLink: "",
      },
      {
        name: "Marksheet of Class 7",
        sampleImage: "",
        portalLink: "https://scholarships.gov.in/",
        videoLink: "",
      },
    ],
    applicationProcess: {
      online: [
        "Apply via National Scholarship Portal (NSP).",
        "Appear for NMMSS Selection Test (MAT/SAT).",
        "Upload documents.",
        "Check status & receive communication on portal.",
      ],
      offline: [
        "Obtain application details from school or district education office.",
        "Submit hardcopy documents for nomination.",
        "Verification and approval by local education departments.",
      ],
    },
    faqs: [
      "Q: Who qualifies for the scholarship?\nA: Class 8 students in government/aided schools with income < ₹3.5 lakh.",
      "Q: How is the exam conducted?\nA: By state/UT Board (MAT & SAT).",
      "Q: Can I track payment?\nA: Yes via NSP portal.",
    ],
    imageUrl: "",
    launchedYear: 2008,
    category: "Scholarships & Financial Aid",
    detailedPage: "/schemes/nmmss",
    icon: "BadgeDollarSign",
  },
  {
    title: "Rashtriya Madhyamik Shiksha Abhiyan (RMSA)",
    shortDescription:
      "Government program for secondary education improvement—access, infrastructure, scholarships—for Classes 9-12.",
    portalLink: "https://dsel.education.gov.in/rmsa",
    detailedDescription:
      "Merged under Samagra Shiksha, RMSA focused on secondary school upgrades, teacher training, and scholarships for EWS, SC/ST, and minorities. Infrastructure projects and financial assistance aimed to increase enrollment and learning outcomes at the secondary level.",
    benefits: [
      "School Infrastructure Upgrades",
      "Smart Classrooms",
      "Teacher Training programs",
      "Scholarships for EWS/SC/ST/Minorities",
    ],
    eligibilityCriteria: [
      "Schools: Government or aided, Classes 9-12",
      "Students: EWS/SC/ST/minorities nominated by school",
      "School proposal/review by State project directorate",
    ],
    nonEligible: [
      "Unrecognized/private schools",
      "Ineligible students as per quota/criteria",
    ],
    requiredDocuments: [
      {
        name: "School Infrastructure Proposal",
        sampleImage: "",
        portalLink: "https://dsel.education.gov.in/rmsa",
        videoLink: "https://www.youtube.com/user/MyGovIndia",
      },
      {
        name: "Student Nomination Form",
        sampleImage: "",
        portalLink: "https://dsel.education.gov.in/rmsa",
        videoLink: "https://www.youtube.com/user/MyGovIndia",
      },
    ],
    applicationProcess: {
      online: [
        "Schools login and submit proposals on RMSA portal.",
        "Upload documents supporting infrastructure/training needs.",
        "Track development approval and fund allocation online.",
      ],
      offline: [
        "Visit district/state education office for forms.",
        "Submit paper proposals or nominations.",
        "Verification by Ministry of Education or Project Directorate.",
      ],
    },
    faqs: [
      "Q: Can schools apply for smart classrooms under RMSA?\nA: Yes, as part of RMSA or merged Samagra Shiksha.",
      "Q: Who gets scholarship?\nA: Students nominated from EWS/SC/ST/minorities.",
      "Q: How is fund disbursement tracked?\nA: Through district/state education department.",
    ],
    imageUrl: "",
    launchedYear: 2009,
    category: "School Infrastructure Development",
    detailedPage: "/schemes/rmsa",
    icon: "Building",
  },
];



const InsertData=async()=>{
    connection();
    await SE.deleteMany();
    const ack=await SE.insertMany(schemes);
}
InsertData()