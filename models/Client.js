const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    profileImage: {
        type: String
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const ClientModel = mongoose.model('Client', clientSchema);

module.exports = ClientModel;
