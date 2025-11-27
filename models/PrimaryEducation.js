import mongoose from "mongoose";

const RequiredDocumentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sampleImage: { type: String, default: "" },
    portalLink: { type: String, required: true },
    videoLink: { type: String, default: "" }
});

const PESchema = new mongoose.Schema({
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    portalLink: { type: String, required: true },
    detailedDescription: { type: String, required: true },
    benefits: { type: [String], required: true },
    eligibilityCriteria: { type: [String], required: true },
    nonEligible: { type: [String] },
    requiredDocuments: [RequiredDocumentSchema],
    applicationProcess: {
        online: { type: [String], required: true },
        offline: { type: [String], required: true }
    },
    faqs: { type: [String], default: [] },
    imageUrl: { type: String, default: "" }
});


const PEModel=mongoose.models.PEModel ||mongoose.model("PEModel",PESchema);

export default PEModel;