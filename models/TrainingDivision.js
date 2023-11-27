const mongoose = require('mongoose');
const ExerciseModel = require('./Exercise');

const trainingDivisionSchema = new mongoose.Schema({
    name: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    exercises: [ExerciseModel.schema]
});

const TrainingDivisionModel = mongoose.model('TrainingDivision', trainingDivisionSchema);

module.exports = TrainingDivisionModel;
