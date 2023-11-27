const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: String,
    description: String,
    equipment: String,
    demoImage: String,
    notes: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const ExerciseModel = mongoose.model('Exercise', exerciseSchema);

module.exports = ExerciseModel;
