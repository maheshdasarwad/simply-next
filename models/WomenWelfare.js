import mongoose from "mongoose";

const RequiredDocumentSchema = new mongoose.Schema({
    name: { type: String },
    sampleImage: { type: String, default: "" },
    portalLink: { type: String },
    videoLink: { type: String, default: "" }
});

const WWSchema = new mongoose.Schema({
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    portalLink: { type: String, required: true },
    detailedDescription: { type: String, required: true },
    benefits: { type: [String], required: true },
    eligibilityCriteria: { type: [String] },
    nonEligible: { type: [String]},
    requiredDocuments: [RequiredDocumentSchema],
    applicationProcess: {
        online: { type: [String] },
        offline: { type: [String] }
    },
    faqs: { type: [String], default: [] },
    imageUrl: { type: String, default: "" },
    launchedYear:{ type: String, required: true },
    category:{ type: String, required: true },
    detailedPage:{ type: String, required: true },
    icon:{ type: String, required: true },
});


const WWModel=mongoose.models.WWModel ||mongoose.model("WWModel",WWSchema);

export default WWModel;