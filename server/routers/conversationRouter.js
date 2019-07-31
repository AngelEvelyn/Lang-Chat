const { Router } = require('express');
const conversationController = require('../controllers/conversationController');
const conversationRouter = new Router();

conversationRouter.post('/create', conversationController.createConversation, (req, res) => {
    res.status(200).json({ success: true, message: `conversation successfully created`})
});

module.exports = conversationRouter;