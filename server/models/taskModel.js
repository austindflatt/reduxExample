const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
	description: { type: String, required: true },
	priority: { type: String, required: true },
	completed: { type: Boolean, default: false }
}, { timestamps: true })

module.exports = mongoose.model("Task", TaskSchema);