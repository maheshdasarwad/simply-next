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
import HE from "../../models/HigherEducation.js"

const data = [
  {
    title: "Dr. Panjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna",
    shortDescription: "A scheme providing financial assistance for hostel and living expenses to students in higher education.",
    portalLink: "https://highereducation.maharashtra.gov.in/",
    detailedDescription: "This scheme offers a stipend to students to help cover their hostel and mess charges, supporting access to higher education.",
    benefits: [
      "Financial aid for hostel and living expenses",
      "Enables economically weaker students to pursue higher studies",
      "Covers a wide range of courses and institutions"
    ],
    eligibilityCriteria: [
      "Resident of Maharashtra",
      "Admission in a recognized higher education institution",
      "Family income limit as per government norms"
    ],
    nonEligible: [],
    requiredDocuments: [
      { name: "Identity Proof", sampleImage: "", portalLink: "https://highereducation.maharashtra.gov.in/", videoLink: "" },
      { name: "Address Proof", sampleImage: "", portalLink: "https://highereducation.maharashtra.gov.in/", videoLink: "" },
      { name: "Admission Letter", sampleImage: "", portalLink: "https://highereducation.maharashtra.gov.in/", videoLink: "" },
      { name: "Income Certificate", sampleImage: "", portalLink: "https://highereducation.maharashtra.gov.in/", videoLink: "" },
      { name: "Photograph", sampleImage: "", portalLink: "https://highereducation.maharashtra.gov.in/", videoLink: "" }
    ],
    applicationProcess: {
      online: [
        "Visit the official education portal",
        "Register and fill out the application form",
        "Upload required documents",
        "Submit application for verification"
      ],
      offline: [
        "Collect the application form from the institute",
        "Fill and attach necessary documents",
        "Submit to administrative office"
      ]
    },
    faqs: [],
    imageUrl: "/Images/higher_Edu/PJVNB.jpg",
    launchedYear: "—",
    category: "Scholarships & Financial Aid",
    detailedPage: "/schemes/panjabrao-deshmukh-bhatta",
    icon: "BadgeDollarSign"
  },
  {
    title: "Post-Matric Scholarship Scheme",
    shortDescription: "Government-funded scholarship enabling students from SC, ST, OBC backgrounds to pursue post-matric studies.",
    portalLink: "https://scholarships.gov.in/",
    detailedDescription: "Launched in 1944-45, this scheme provides financial support to eligible students for fees, allowances, and various academic expenses.",
    benefits: [
      "Covers tuition, exam fees, and maintenance allowance",
      "Encourages continuation of education beyond matriculation"
    ],
    eligibilityCriteria: [
      "Belongs to SC, ST, OBC community",
      "Passed previous qualifying examination",
      "Family income within prescribed limits"
    ],
    nonEligible: [],
    requiredDocuments: [
      { name: "Caste Certificate", sampleImage: "", portalLink: "https://scholarships.gov.in/", videoLink: "" },
      { name: "Income Certificate", sampleImage: "", portalLink: "https://scholarships.gov.in/", videoLink: "" },
      { name: "Marksheet", sampleImage: "", portalLink: "https://scholarships.gov.in/", videoLink: "" },
      { name: "Bank Passbook", sampleImage: "", portalLink: "https://scholarships.gov.in/", videoLink: "" },
      { name: "Photograph", sampleImage: "", portalLink: "https://scholarships.gov.in/", videoLink: "" }
    ],
    applicationProcess: {
      online: [
        "Register on National Scholarship Portal",
        "Complete application form and upload documents",
        "Submit for verification"
      ],
      offline: [
        "Fill physical application available at institution",
        "Attach necessary documents",
        "Submit to designated authority"
      ]
    },
    faqs: [],
    imageUrl: "/Images/higher_Edu/POST.jpg",
    launchedYear: "1944-45",
    category: "Scholarships & Financial Aid",
    detailedPage: "/schemes/post-matric-scholarship",
    icon: "BadgeDollarSign"
  },
  {
    title: "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna",
    shortDescription: "Scholarship scheme providing tuition fee support for meritorious students in Maharashtra.",
    portalLink: "https://mahaeschol.maharashtra.gov.in/",
    detailedDescription: "Offers reimbursement of tuition fees to deserving students, reducing financial barriers to higher education.",
    benefits: [
      "Reimbursement of tuition fees for eligible students",
      "Supports meritorious students across Maharashtra",
      "Reduces out-of-pocket education expenses"
    ],
    eligibilityCriteria: [
      "Citizen of Maharashtra",
      "Enrolled in recognized institution",
      "Merit-based selection"
    ],
    nonEligible: [],
    requiredDocuments: [
      { name: "Marksheet", sampleImage: "", portalLink: "https://mahaeschol.maharashtra.gov.in/", videoLink: "" },
      { name: "Admission Receipt", sampleImage: "", portalLink: "https://mahaeschol.maharashtra.gov.in/", videoLink: "" },
      { name: "Bank Details", sampleImage: "", portalLink: "https://mahaeschol.maharashtra.gov.in/", videoLink: "" },
      { name: "Photograph", sampleImage: "", portalLink: "https://mahaeschol.maharashtra.gov.in/", videoLink: "" }
    ],
    applicationProcess: {
      online: [
        "Register and apply on state scholarship portal",
        "Upload mandatory documents",
        "Submit for approval"
      ],
      offline: [
        "Collect and fill application form",
        "Attach relevant documents",
        "Submit to the institutional authority"
      ]
    },
    faqs: [],
    imageUrl: "/Images/higher_Edu/RSMS.png",
    launchedYear: "—",
    category: "Scholarships & Financial Aid",
    detailedPage: "/schemes/shahu-maharaj-shishyavrutti",
    icon: "BadgeDollarSign"
  },
  {
    title: "Reimbursement of Tuition Fee Scheme for SC/ST/OBC",
    shortDescription: "Scheme providing tuition fee reimbursement for students from SC, ST, and OBC categories.",
    portalLink: "https://samajkalyan.maharashtra.gov.in/",
    detailedDescription: "Implemented in 2003-04, helps students from backward classes pursue higher education by reimbursing tuition fees.",
    benefits: [
      "Tuition fee reimbursement for eligible categories",
      "Promotes educational inclusion"
    ],
    eligibilityCriteria: [
      "Student must belong to SC/ST/OBC and be from Maharashtra",
      "Enrolled in government-approved institution"
    ],
    nonEligible: [],
    requiredDocuments: [
      { name: "Caste Certificate", sampleImage: "", portalLink: "https://samajkalyan.maharashtra.gov.in/", videoLink: "" },
      { name: "Tuition Fee Receipt", sampleImage: "", portalLink: "https://samajkalyan.maharashtra.gov.in/", videoLink: "" },
      { name: "Admission Letter", sampleImage: "", portalLink: "https://samajkalyan.maharashtra.gov.in/", videoLink: "" },
      { name: "Photograph", sampleImage: "", portalLink: "https://samajkalyan.maharashtra.gov.in/", videoLink: "" }
    ],
    applicationProcess: {
      online: [
        "Login to state social welfare portal",
        "Submit application form",
        "Upload supporting documents"
      ],
      offline: [
        "Collect form from college admin",
        "Attach caste, fee, and admission proofs",
        "Submit to social welfare office"
      ]
    },
    faqs: [],
    imageUrl: "/Images/higher_Edu/TF.jpg",
    launchedYear: "2003-04",
    category: "Scholarships & Financial Aid",
    detailedPage: "/schemes/tuition-fee-reimbursement",
    icon: "BadgeDollarSign"
  }
];


const InsertData=async()=>{
    connection();
    await HE.deleteMany();
    const ack=await HE.insertMany(data);
}
InsertData()