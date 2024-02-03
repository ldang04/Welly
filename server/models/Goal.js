const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    currentXp: {
        type: Number, 
        default: 0
    }, 
    totalXp: {
        type: Number, 
        default: 100
    }, 
    completed: {
        type: Boolean, 
        default: false
    }, 
    pledge: {
        type: Number,
        default: 0
    }
});

module.exports = Goal = mongoose.model('goal', GoalSchema);