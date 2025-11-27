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
import PE from "../../models/PrimaryEducation.js";

const data = [
  {
    title: "Right to Education (RTE) Act, 2009",
    shortDescription: "Free and compulsory education for children aged 6-14 years, with special focus on underprivileged groups.",
    portalLink: "https://education.gov.in/rte",
    detailedDescription: "A landmark legislation enacted by the Government of India to provide free and compulsory education to children aged 6-14 years. It mandates that no child shall be denied education and ensures equal learning opportunities for all, with a special focus on disadvantaged groups.",
    benefits: [
      "Free education for children aged 6-14 years.",
      "25% reservation in private unaided schools.",
      "School infrastructure development.",
      "Teacher training and quality improvement.",
      "Protection against discrimination."
    ],
    eligibilityCriteria: [
      "Children aged 6 to 14 years.",
      "Must be a resident of India.",
      "Family income below ₹2-3 lakh per annum for Economically Weaker Sections (EWS) & disadvantaged groups.",
      "Eligible categories: EWS, SC, ST, OBC, disabled children, orphans.",
      "Covers government and private unaided schools (25% reservation in private schools)."
    ],
    nonEligible: [],
    requiredDocuments: [
      {
        name: "Identity Proof",
        sampleImage: "",
        portalLink: "https://education.gov.in/rte-guidelines.pdf",
        videoLink: ""
      },
      {
        name: "Address Proof",
        sampleImage: "",
        portalLink: "https://education.gov.in/rte-guidelines.pdf",
        videoLink: ""
      },
      {
        name: "Income Certificate",
        sampleImage: "",
        portalLink: "https://education.gov.in/rte-guidelines.pdf",
        videoLink: ""
      },
      {
        name: "Caste Certificate",
        sampleImage: "",
        portalLink: "https://education.gov.in/rte-guidelines.pdf",
        videoLink: ""
      },
      {
        name: "Disability Certificate",
        sampleImage: "",
        portalLink: "https://education.gov.in/rte-guidelines.pdf",
        videoLink: ""
      }
    ],
    applicationProcess: {
      online: [
        "Register at RTE Admission Portal. Choose state and district, fill child's details, upload documents, and submit application."
      ],
      offline: [
        "Visit nearest govt/private school, fill RTE Admission Form, submit documents. School forwards application to State Education Department."
      ]
    },
    faqs: [],
    imageUrl: ""
  },
  {
    title: "Pradhan Mantri Schools for Rising India (PM SHRI Schools)",
    shortDescription: "Model schools initiative for top quality education, infrastructure, digital learning, and sustainable development.",
    portalLink: "https://pmshrischools.education.gov.in",
    detailedDescription: "A centrally sponsored initiative launched by the Government of India to develop quality model schools across the country. These schools will serve as exemplary institutions, focusing on innovative pedagogy, smart classrooms, skill development, and sustainability.",
    benefits: [
      "World-class infrastructure upgrades.",
      "Digital smart classrooms and labs.",
      "Special focus on teacher training and skills.",
      "Promotion of sustainable and eco-friendly education.",
      "Non-discriminatory access for all groups."
    ],
    eligibilityCriteria: [
      "Covers Kendriya Vidyalayas (KVs), Jawahar Navodaya Vidyalayas (JNVs), and State Government Schools.",
      "Schools must meet minimum infrastructure, academic, and sustainability benchmarks."
    ],
    nonEligible: [],
    requiredDocuments: [
      {
        name: "School Recognition Certificate",
        sampleImage: "",
        portalLink: "https://pmshrischools.education.gov.in/guidelines.pdf",
        videoLink: ""
      },
      {
        name: "Infrastructure Report",
        sampleImage: "",
        portalLink: "https://pmshrischools.education.gov.in/guidelines.pdf",
        videoLink: ""
      },
      {
        name: "Teacher Qualification Records",
        sampleImage: "",
        portalLink: "https://pmshrischools.education.gov.in/guidelines.pdf",
        videoLink: ""
      },
      {
        name: "Sustainability Plan",
        sampleImage: "",
        portalLink: "https://pmshrischools.education.gov.in/guidelines.pdf",
        videoLink: ""
      }
    ],
    applicationProcess: {
      online: [
        "Register at PM SHRI Schools Portal. Fill out School Nomination Form with details of infrastructure, teachers, and academic performance. Upload documents and track status."
      ],
      offline: [
        "Apply via District/State Education Dept. Submit School Development Plan as per PM SHRI guidelines. State authorities verify and nominate for final selection."
      ]
    },
    faqs: [],
    imageUrl: ""
  },
  {
    title: "Digital Infrastructure for Knowledge Sharing (DIKSHA)",
    shortDescription: "Free digital portal offering e-learning resources for students, teachers, and schools throughout India.",
    portalLink: "https://diksha.gov.in",
    detailedDescription: "A national e-learning platform launched by the Government of India to provide free digital education resources for students, teachers, and educational institutions. It offers interactive textbooks, video lessons, teacher training materials, and assessments aligned with the National Education Policy (NEP) 2020.",
    benefits: [
      "Free digital textbooks, videos, and quizzes.",
      "Teacher training modules.",
      "Continuous online learning platform.",
      "Equitable access for all school types.",
      "No discrimination based on category or region."
    ],
    eligibilityCriteria: [
      "Students of Class 1 to 12 in India.",
      "All teachers in government and private schools in India.",
      "Any recognized educational institution."
    ],
    nonEligible: [],
    requiredDocuments: [
      {
        name: "Teacher ID Proof",
        sampleImage: "",
        portalLink: "https://diksha.gov.in/guidelines.pdf",
        videoLink: ""
      },
      {
        name: "Institution Details",
        sampleImage: "",
        portalLink: "https://diksha.gov.in/guidelines.pdf",
        videoLink: ""
      },
      {
        name: "Student Credentials",
        sampleImage: "",
        portalLink: "https://diksha.gov.in/guidelines.pdf",
        videoLink: ""
      }
    ],
    applicationProcess: {
      online: [
        "Visit DIKSHA Portal, select role (Student/Teacher/Parent), choose language, explore resources, or download DIKSHA app and sign up."
      ],
      offline: [
        "Access DIKSHA content in school computer labs, or download resources for offline use in rural areas."
      ]
    },
    faqs: [],
    imageUrl: ""
  }
];

const InsertData=async()=>{
    connection();
    await PE.deleteMany();
    const ack=await PE.insertMany(data);
}
InsertData()