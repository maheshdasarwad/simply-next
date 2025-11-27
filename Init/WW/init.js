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
import WW from "../../models/WomenWelfare.js"

const data= [
  {
    title: "Beti Bachao Beti Padhao (BBBP)",
    shortDescription: "hello",
    portalLink: "https://wcd.nic.in/bbbp-schemes",
    detailedDescription: "hello",
    benefits: [
      "Address the declining child sex ratio",
      "Promote gender equality",
      "Ensure education for the girl child"
    ],
    eligibilityCriteria: [], // Not provided explicitly for this scheme in original data
    nonEligible: [], // Not provided explicitly for this scheme in original data
    requiredDocuments: [
      // No direct mapping of documents array from original data, only photos and PDFs described
    ],
    applicationProcess: {
      online: [
        // No explicit online application steps given for this scheme
      ],
      offline: [
        // No explicit offline application steps given for this scheme
      ]
    },
    faqs: [], // No FAQs given
    imageUrl: "", 
    launchedYear:2015,
    category:"Education & Skill Development",
    detailedPage:"BBBP",
    icon:"GraduationCap"
  },
  {
    title: "Ladki Bahin Yojana (Mukhya Mantri Mazi Ladki Bahin Yojana)",
    shortDescription: "hello",
    portalLink: "https://ladakibahin.maharashtra.gov.in",
    detailedDescription: "hello",
    benefits: [
      "Provide financial support to women",
      "Empower women through direct financial assistance"
    ],
    eligibilityCriteria: [
      "Resident of Maharashtra",
      "Women aged 21–65 years",
      "Annual family income less than ₹2.5 lakh",
      "Not an Income Tax payer",
      "Must not own luxury assets (e.g., four-wheelers, AC, high-value gold/silver)"
    ],
    nonEligible: [], // Not explicitly given
    requiredDocuments: [
      { name: "Aadhaar Card" },
      { name: "Residence Proof" },
      { name: "Income Certificate" },
      { name: "Bank Passbook Copy" },
      { name: "Recent Photograph" }
    ],
    applicationProcess: {
      online: [
        "Visit: https://ladakibahin.maharashtra.gov.in",
        "Register: Enter personal & financial details",
        "Upload Documents: Aadhaar, residence proof, income certificate, etc.",
        "Submit: Application will be processed for approval"
      ],
      offline: [
        "Collect form from Gram Panchayat / Municipal Office",
        "Fill details & attach required documents",
        "Submit to the respective authority"
      ]
    },
    faqs: [], // Not provided
    imageUrl: "",
    launchedYear:2023,
    category:"Financial Assistance & Social Security",
    detailedPage:"LBY",
    icon:'Shield'
  }
];

const InsertData=async()=>{
    connection();
    await WW.deleteMany();
    const ack=await WW.insertMany(data);
}
InsertData()