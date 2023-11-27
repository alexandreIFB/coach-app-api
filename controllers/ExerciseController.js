const mongoose = require('mongoose');
const Exercise = require('../models/Exercise');

module.exports = {
  async show(req, res) {
    try {
      const exercises = await Exercise.find();
      return res.json(exercises);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar exercícios' });
    }
  },

  async store(req, res) {
    try {
      const exercise = await Exercise.create(req.body);
      return res.json(exercise);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar exercício' });
    }
  },

  async destroy(req, res) {
    try {
      const exercise = await Exercise.findByIdAndRemove(req.params.id);
      return res.json(exercise);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir exercício' });
    }
  },

  async update(req, res) {
    try {
      const exercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.json(exercise);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar exercício' });
    }
  }
};
