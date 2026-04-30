const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const verifyToken = require('../middleware/authMiddleware');

router.post('/create', verifyToken, async (req, res) => {
    try {
        const { title, description } = req.body;

        const project = new Project({
            title,
            description,
            createdBy: req.user.id
        });

        await project.save();
        res.status(201).json({ message: "Project created successfully", project });

    } catch (error) {
        res.status(500).json({ message: "Project creation failed" });
    }
});

router.get('/all', verifyToken, async (req, res) => {
    try {
        const projects = await Project.find().populate('createdBy', 'name email');
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch projects" });
    }
});

module.exports = router;