const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        try {
            const users = await User.find();
            return res.json(users);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    },

    async store(req, res) {
        try {
            const user = await User.create(req.body);
            return res.json(user);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criar usuário' });
        }
    },

    async destroy(req, res) {
        try {
            const user = await User.findByIdAndRemove(req.params.id);
            return res.json(user);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao excluir usuário' });
        }
    },

    async update(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.json(user);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao atualizar usuário' });
        }
    }
};
