const mongoose = require('mongoose');
const Client = require('../models/Client');

module.exports = {
  // Lista todos os usuários
  async show(req, res) {
    try {
      const clients = await Client.find();
      return res.json(clients);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  },

  // Lista usuários com filtro de e-mail
  async index(req, res) {
    try {
      const clients = await Client.find({ email: req.query.email });
      return res.json(clients);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar usuários por e-mail' });
    }
  },

  // Adiciona usuário
  async store(req, res) {
    try {
      const client = await Client.create(req.body);
      return res.json(client);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  },

  // Deleta usuário
  async destroy(req, res) {
    try {
      const client = await Client.findByIdAndRemove(req.params.id);
      return res.json(client);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir usuário' });
    }
  },

  // Altera usuário
  // Deve-se passar dois dados: o id via parâmetro e o JSON via body
  async update(req, res) {
    try {
      const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.json(client);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
  },
};
