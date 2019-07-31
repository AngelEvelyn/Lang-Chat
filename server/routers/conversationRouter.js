const { Router } = require('express');
const conversationController = require('../controllers/conversationController');

const conversationRouter = new Router();

conversationRouter.post('/create', conversationController.createConversation, (req, res) => {
  res.status(200).json({ success: true, message: 'conversation successfully created' });
});

conversationRouter.post('/report', conversationController.conversationReport, (req, res) => {
  res.status(200).json({ success: true, message: 'report successfully created' });
});

module.exports = conversationRouter;
