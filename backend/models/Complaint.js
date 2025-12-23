const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
    citizen_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true }, // Lat/Lng string or object
    address: { type: String }, // Human readable address

    images: [{ type: String }], // Array of Base64 strings. Index 0 = Before. Index 1 = After (if resolved)

    status: {
        type: String,
        enum: ['Submitted', 'In Progress', 'Resolved', 'Rejected'],
        default: 'Submitted',
    },

    // AI Fields
    category: { type: String, default: 'Uncategorized' },
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },

    // Community Validation
    votes: { type: Number, default: 0 },
    verifiedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Users who verified the fix

    // Lifecycle
    timeline: [{
        status: String,
        timestamp: { type: Date, default: Date.now },
        updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        note: String
    }],

    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
