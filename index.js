const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect("mongodb+srv://xandDb:Z0JAueWmgfJB4gli@cluster0.u463vax.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

// Controllers
const userController = require('./controllers/UserController');
const clientController = require('./controllers/ClientController'); 
const exerciseController = require('./controllers/ExerciseController');
const trainingDivisionController = require('./controllers/TrainingDivisionController');
const trainingPlanController = require('./controllers/TrainingPlanController');

// User Endpoints
app.get('/user', userController.show);
app.post('/user', userController.store);
app.delete('/user/:id', userController.destroy);
app.put('/user/:id', userController.update);

// Client Endpoints
app.get('/client', clientController.show); // Listar todos os clientes
app.post('/client', clientController.store); // Criar um cliente
app.delete('/client/:id', clientController.destroy); // Excluir um cliente
app.put('/client/:id', clientController.update); // Atualizar um cliente

// Exercise Endpoints
app.get('/exercise', exerciseController.show);
app.post('/exercise', exerciseController.store);
app.delete('/exercise/:id', exerciseController.destroy);
app.put('/exercise/:id', exerciseController.update);

// TrainingDivision Endpoints
app.get('/trainingdivision', trainingDivisionController.show);
app.post('/trainingdivision', trainingDivisionController.store);
app.delete('/trainingdivision/:id', trainingDivisionController.destroy);
app.put('/trainingdivision/:id', trainingDivisionController.update);

// TrainingPlan Endpoints
app.get('/trainingplan', trainingPlanController.show);
app.post('/trainingplan', trainingPlanController.store);
app.delete('/trainingplan/:id', trainingPlanController.destroy);
app.put('/trainingplan/:id', trainingPlanController.update);

// Inicialização básica
app.get('/', (req, res) => {
    res.send('REST API');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
