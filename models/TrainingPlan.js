const mongoose = require('mongoose');
const TrainingDivisionModel = require('./TrainingDivision'); 

const trainingPlanSchema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    description: String,
    name: String,
    startDate: String,
    expirationDate: String,
    divisions: [TrainingDivisionModel.schema] 
});

const TrainingPlanModel = mongoose.model('TrainingPlan', trainingPlanSchema);

module.exports = TrainingPlanModel;
