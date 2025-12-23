const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');
const { authenticate } = require('../middleware/auth');

// POST /api/complaints - Create new complaint (Citizen)
router.post('/', authenticate, async (req, res) => {
    try {
        const { title, description, location, address, image } = req.body; // image is single base64 string "Before"

        // --- AI Logic Placeholder ---
        // In a real scenario, we would send 'description' and 'image' to Gemini API here.
        // For now, we mock it:
        const mockCategories = ['Sanitation', 'Roads', 'Electricity', 'Water', 'Other'];
        const aiCategory = mockCategories[Math.floor(Math.random() * mockCategories.length)];
        const aiPriority = 'Medium'; // Default
        // ----------------------------

        const newComplaint = new Complaint({
            citizen_id: req.user.id,
            title,
            description,
            location,
            address,
            images: [image], // Store as first element
            category: aiCategory,
            priority: aiPriority,
            timeline: [{
                status: 'Submitted',
                updatedBy: req.user.id,
                note: 'Complaint created'
            }]
        });

        const savedComplaint = await newComplaint.save();
        res.status(201).json(savedComplaint);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /api/complaints - Get all (Public/Feed)
router.get('/', async (req, res) => {
    try {
        const complaints = await Complaint.find().sort({ createdAt: -1 });
        res.json(complaints);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT /api/complaints/:id/vote - Upvote (Public - Requires Auth)
router.put('/:id/vote', authenticate, async (req, res) => {
    try {
        const complaint = await Complaint.findById(req.params.id);
        if (!complaint) return res.status(404).json({ message: 'Complaint not found' });

        // Simple increment for now. Real world: track who voted to prevent doubles
        complaint.votes += 1;
        await complaint.save();
        res.json(complaint);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
