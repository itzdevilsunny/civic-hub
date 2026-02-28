const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    identityId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    metrics: {
        digitalLiteracyScore: { type: Number, default: 85 },
        petitionsSigned: { type: Number, default: 0 },
    },
    dataConsents: {
        locationTracking: { type: Boolean, default: false },
        demographicSharing: { type: Boolean, default: false }
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
