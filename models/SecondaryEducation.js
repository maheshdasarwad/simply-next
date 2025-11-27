import mongoose from "mongoose";

const RequiredDocumentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sampleImage: { type: String, default: "" },
    portalLink: { type: String, required: true },
    videoLink: { type: String, default: "" }
});

const SESchema = new mongoose.Schema({
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    portalLink: { type: String, required: true },
    detailedDescription: { type: String, required: true },
    benefits: { type: [String], required: true },
    eligibilityCriteria: { type: [String], required: true },
    nonEligible: { type: [String], required: true },
    requiredDocuments: [RequiredDocumentSchema],
    applicationProcess: {
        online: { type: [String], required: true },
        offline: { type: [String], required: true }
    },
    faqs: { type: [String], default: [] },
    imageUrl: { type: String, default: "" },
    launchedYear:{ type: String, required: true },
    category:{ type: String, required: true },
    detailedPage:{ type: String, required: true },
    icon:{ type: String, required: true },
});


const SEModel=mongoose.models.SEModel ||mongoose.model("SEModel",SESchema);

export default SEModel;