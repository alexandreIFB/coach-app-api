const mongoose = require('mongoose');
const TrainingDivision = require('../models/TrainingDivision');

module.exports = {
  async show(req, res) {
    try {
      const divisions = await TrainingDivision.find();
      return res.json(divisions);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar divisões de treinamento' });
    }
  },

  async store(req, res) {
    try {
      const division = await TrainingDivision.create(req.body);
      return res.json(division);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar divisão de treinamento' });
    }
  },

  async destroy(req, res) {
    try {
      const division = await TrainingDivision.findByIdAndRemove(req.params.id);
      return res.json(division);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir divisão de treinamento' });
    }
  },

  async update(req, res) {
    try {
      const division = await TrainingDivision.findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.json(division);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar divisão de treinamento' });
    }
  }
};
