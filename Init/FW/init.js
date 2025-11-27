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
import FW from "../../models/FarmerWelfare.js"

const data = [
  {
    title: "Kisan Credit Card (KCC) Scheme – A Comprehensive Guide",
    shortDescription: "The Kisan Credit Card (KCC) Scheme, launched in 1998, is a vital government initiative designed to provide farmers with timely and adequate credit support to meet their agricultural needs.",
    portalLink: "https://rbi.org.in",
    detailedDescription: "Launched in 1998. Short term credit: 300000. Interest rate: 7. Subsidy rate: 3. Loan tenure: 1 year (short-term).",
    benefits: [
      "Subsidized Interest Rates - 7% per annum with a 3% subsidy for prompt repayment.",
      "Flexible Repayment Schedule aligned with crop harvest and marketing seasons.",
      "Covers diverse agricultural needs such as crop production, post-harvest expenses, and allied activities (dairy, poultry, fisheries)."
    ],
    eligibilityCriteria: [
      "Age between 18 and 75 years.",
      "Minimum land requirement: 0.5 acres.",
      "Applicant must demonstrate repayment ability based on agricultural income."
    ],
    nonEligible: [],
    requiredDocuments: [
      { name: "Identity Proof", sampleImage: "", portalLink: "https://rbi.org.in", videoLink: "" },
      { name: "Address Proof", sampleImage: "", portalLink: "https://rbi.org.in", videoLink: "" },
      { name: "Land Ownership Proof", sampleImage: "", portalLink: "https://rbi.org.in", videoLink: "" },
      { name: "Photographs", sampleImage: "", portalLink: "https://rbi.org.in", videoLink: "" },
      { name: "Bank Account Details", sampleImage: "", portalLink: "https://rbi.org.in", videoLink: "" }
    ],
    applicationProcess: {
      online: [
        "Visit the bank’s online portal.",
        "Fill out the application form with necessary details.",
        "Upload identity proof, land records, and bank details.",
        "Submit the application and await confirmation."
      ],
      offline: [
        "Visit a bank branch offering KCC.",
        "Collect and fill out the KCC application form.",
        "Submit required documents including identity proof, land ownership records, and bank details.",
        "Await verification and approval."
      ]
    },
    faqs: [],
    imageUrl: "/Images/farmer_welf/kisan_Credit_Card.jpg",
    launchedYear: "1998",
    category: "Credit & Loan Schemes",
    detailedPage: "/schemes/kisan-credit-card",
    icon: "Banknote"
  },
  {
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    shortDescription: "The Pradhan Mantri Fasal Bima Yojana (PMFBY) is a government initiative launched in 2016 to provide comprehensive crop insurance coverage to farmers, protecting them from financial loss due to natural calamities, pests, and diseases.",
    portalLink: "https://pmfby.gov.in",
    detailedDescription: "Launched in 2016.",
    benefits: [],
    eligibilityCriteria: [],
    nonEligible: [],
    requiredDocuments: [],
    applicationProcess: {
      online: [],
      offline: []
    },
    faqs: [
      "https://pmfby.gov.in/faqs"
    ],
    imageUrl: "/Images/farmer_welf/pradhan_Mantri_Fasal.jpg",
    launchedYear: "2016",
    category: "Crop Insurance & Risk Management",
    detailedPage: "/schemes/pmfby",
    icon: "ShieldCheck"
  },
  {
    title: "Pradhan Mantri Krishi Sinchayee Yojana",
    shortDescription: "A scheme to improve irrigation efficiency and ensure water availability for agriculture",
    portalLink: "https://pmksy.gov.in",
    detailedDescription: "Launched in 2015. Micro irrigation subsidy general: 55. Micro irrigation subsidy scst: 65. Watershed funding: Varies based on project. Drip irrigation: Subsidized loans and financial aid.",
    benefits: [
      "More Crops Per Drop: Focus on efficient water use",
      "Financial Assistance: Grants for micro-irrigation systems",
      "Improved Irrigation Coverage: Expansion of irrigated land",
      "Integration with Other Schemes: Linked with MNREGA, PM-KISAN, etc"
    ],
    eligibilityCriteria: [
      "Age between 18 and 75 years.",
      "Minimum land requirement: 0.5 acres.",
      "Based on irrigation project feasibility"
    ],
    nonEligible: [],
    requiredDocuments: [
      { name: "Identity Proof", sampleImage: "", portalLink: "https://pmksy.gov.in", videoLink: "" },
      { name: "Address Proof", sampleImage: "", portalLink: "https://pmksy.gov.in", videoLink: "" },
      { name: "Land Ownership Proof", sampleImage: "", portalLink: "https://pmksy.gov.in", videoLink: "" },
      { name: "Photographs", sampleImage: "", portalLink: "https://pmksy.gov.in", videoLink: "" },
      { name: "Bank Account Details", sampleImage: "", portalLink: "https://pmksy.gov.in", videoLink: "" }
    ],
    applicationProcess: {
      online: [
        "Visit the official PMKSY website",
        "Fill out the application form with details",
        "Upload scanned copies of required documents",
        "Submit the form and track status online"
      ],
      offline: [
        "Visit the nearest agriculture department office",
        "Collect and fill out the PMKSY application form",
        "Attach required documents (land records, Aadhaar, bank details)",
        "Submit the form and wait for verification"
      ]
    },
    faqs: [],
    imageUrl: "/Images/farmer_welf/PMKSY.jpg",
    launchedYear: "2015",
    category: "Irrigation & Water Management",
    detailedPage: "/schemes/pmksy",
    icon: "Droplet"
  },
  {
    title: "PM Kisan Samman Nidhi Yojana",
    shortDescription: "A government initiative to provide financial assistance to farmers across India. The program aims to help farmers meet their agricultural needs, including buying inputs like seeds, fertilizers, and other resources.",
    portalLink: "https://pmkisan.gov.in/",
    detailedDescription: "Launched in 2018.",
    benefits: [
      "Financial assistance of ₹6,000 annually",
      "Direct transfer to bank accounts",
      "Targeted support for small and marginal farmers",
      "Enhanced agricultural productivity",
      "Improved economic condition of farmers"
    ],
    eligibilityCriteria: [
      "Age between 18 and 75 years.",
      "Minimum land requirement: 4.94 acres."
    ],
    nonEligible: [],
    requiredDocuments: [
      { name: "Identity Proof", sampleImage: "", portalLink: "https://pmkisan.gov.in/", videoLink: "" },
      { name: "Address Proof", sampleImage: "", portalLink: "https://pmkisan.gov.in/", videoLink: "" },
      { name: "Land Ownership Proof", sampleImage: "", portalLink: "https://pmkisan.gov.in/", videoLink: "" },
      { name: "Photographs", sampleImage: "", portalLink: "https://pmkisan.gov.in/", videoLink: "" },
      { name: "Bank Account Details", sampleImage: "", portalLink: "https://pmkisan.gov.in/", videoLink: "" }
    ],
    applicationProcess: {
      online: [
        "Visit the official PM-Kisan Portal",
        "Complete registration form",
        "Submit necessary documents",
        "Wait for verification by authorities",
        "Receive approval and disbursement"
      ],
      offline: [
        "Visit nearest Common Service Center (CSC)",
        "Visit local revenue department",
        "Submit required documents",
        "Complete verification process"
      ]
    },
    faqs: [],
    imageUrl: "/Images/farmer_welf/pm_Kisan_Samman.jpg",
    launchedYear: "2019",
    category: "Income Support Schemes",
    detailedPage: "/schemes/pm-kisan",
    icon: "BadgeDollarSign"
  }
];



const InsertData=async()=>{
    connection();
    await FW.deleteMany();
    const ack=await FW.insertMany(data);
}
InsertData()