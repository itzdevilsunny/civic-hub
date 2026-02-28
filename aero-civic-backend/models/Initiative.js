const mongoose = require('mongoose');

const initiativeSchema = new mongoose.Schema({
    title: { type: String, required: true }, // e.g., "Smart Parking Capacity Enforcement"
    description: { type: String },
    category: {
        type: String,
        enum: ['Petition', 'Legislative Bill', 'PPP', 'Municipal Project'],
        required: true
    },
    stage: {
        type: String,
        enum: ['Drafting', 'Public Review', 'Committee Review', 'Active Development', 'Enacted'],
        default: 'Drafting'
    },
    stakeholders: [{
        entityName: String, // e.g., "Municipal Corporation of Delhi" or "IEEE"
        role: String
    }],
    techStack: [String], // e.g., ['Node.js', 'Leaflet API']
    supportersCount: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Initiative', initiativeSchema);
