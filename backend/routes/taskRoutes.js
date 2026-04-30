const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const verifyToken = require('../middleware/authMiddleware');

router.post('/create', verifyToken, async (req, res) => {
    try {
        const { title, description, project, dueDate, priority } = req.body;

        const task = new Task({
            title,
            description,
            project,
            assignedTo: req.user.id,
            dueDate,
            priority
        });

        await task.save();
        res.status(201).json({ message: "Task created successfully", task });

    } catch (error) {
        res.status(500).json({ message: "Task creation failed" });
    }
});

router.get('/all', verifyToken, async (req, res) => {
    try {
        const tasks = await Task.find()
            .populate('project', 'title')
            .populate('assignedTo', 'name email');

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch tasks" });
    }
});

router.put('/update/:id', verifyToken, async (req, res) => {
    try {
        const { status } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        res.status(200).json({ message: "Task updated", updatedTask });

    } catch (error) {
        res.status(500).json({ message: "Task update failed" });
    }
});

module.exports = router;