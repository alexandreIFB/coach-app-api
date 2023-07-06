const express = require('express');
const bodyParser = require('body-parser');
//================================
const mongoose = require('mongoose');
var cors = require('cors');
mongoose.connect('mongodb+srv://ifbdbdcp:1fbdbdcp@dbdcp.snjo7ph.mongodb.net/?retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useUnifiedTopology: true
});
//======================================
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
//============================================
//== Rotas para o Gerenciamento do Usuário ===
const userController = require('./controllers/UserController');
// adiciona user
app.post('/user', userController.store);
// lista user
app.get('/user', userController.show);
// lista user, filtrando por email
// ex: /user/buscaemail/?email=vaguetti@gmail.com
app.get('/user/buscaemail/*', userController.index);
// exclui user
//req.params  = route params (post, put, delete)
app.delete('/user/:id', userController.destroy);
// altera user
app.put('/user/:id', userController.update);

//===========================================================
//== Rotas para o Gerenciamento de interações com ChatGPT ===

const ChatGPTController = require('./controllers/ChatGPTController');

app.get('/manager/all/chatgpt', ChatGPTController.show);  // todas interações registradas
app.get('/manager/chatgpt/:id', ChatGPTController.indexbyUserId);
app.post('/manager/chatgpt', ChatGPTController.store);
app.put('/manager/chatgpt/:id', ChatGPTController.update);

//=========================================
//== Rotas para Comunicação com ChatGPT ===
app.post('/chatgpt', ChatGPTController.sendMessageToChatGPT);


//===========================================================
// inicialização básica
app.get('/', (req, res) => {
res.send('REST API CHATGPT');
});

app.listen(3000, () => console.log('server REST API CHATGPT started'));

