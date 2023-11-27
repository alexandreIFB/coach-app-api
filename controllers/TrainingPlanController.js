const mongoose = require('mongoose');
const TrainingPlan = require('../models/TrainingPlan');

module.exports = {
  async show(req, res) {
    try {
      const plans = await TrainingPlan.find().populate('clientId');
      return res.json(plans);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar planos de treinamento' });
    }
  },

  async store(req, res) {
    try {
      const plan = await TrainingPlan.create(req.body);
      return res.json(plan);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar plano de treinamento' });
    }
  },

  async destroy(req, res) {
    try {
      const plan = await TrainingPlan.findByIdAndRemove(req.params.id);
      return res.json(plan);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir plano de treinamento' });
    }
  },

  async update(req, res) {
    try {
      const plan = await TrainingPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.json(plan);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar plano de treinamento' });
    }
  }
};
