const mongoose = require('mongoose');

const serviceRequestSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    serviceType: {
        type: String,
        enum: ['Tax Payment', 'ID Renewal', 'Issue Report', 'Geofenced Auth Exception'],
        required: true
    },
    status: { type: String, enum: ['Pending', 'Processing', 'Resolved'], default: 'Pending' },
    location: {
        // GeoJSON format for easy Leaflet integration
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: { type: [Number] } // [longitude, latitude]
    },
    details: { type: String }
}, { timestamps: true });

// Index for geospatial queries
serviceRequestSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('ServiceRequest', serviceRequestSchema);
