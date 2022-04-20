const router = require('express').Router();
const Task = require('../models/taskModel');

// CREATE TASK
router.post('/create', async (req, res) => {
  const newTask = new Task(req.body);
  try {
    const savedTask = await newTask.save();
    return res.status(200).json({ message: 'Task created successfully', payload: savedTask });
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
});

// UPDATE TASK
router.put('/update/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    return res.status(200).json(updatedTask);
  } catch (error) {
    return res.status(500).json(error)
  }
});

// DELETE TASK
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: 'Task deleted successfully', payload: deletedTask });
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET TASK BY ID
router.get('/find/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    return res.status(200).json({ message: 'Task Info', payload: task });
  } catch (error) {
    return res.status(500).json(error)
  }
});

// GET ALL TASKS
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json(tasks.reverse());
  } catch (error) {
    return res.status(500).json(error)
  }
});

module.exports = router;