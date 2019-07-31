const { Router } = require('express');
const conversationController = require('../controllers/conversationController');

const conversationRouter = new Router();

conversationRouter.post('/create', conversationController.createConversation, (req, res) => {
  res.status(200).json({ success: true, result: res.locals.conversation });
});

conversationRouter.post('/report', conversationController.createConversationReport, (req, res) => {
  res.status(200).json({ success: true, result: res.locals.report });
});

conversationRouter.get('/reports/:userId', conversationController.getUserReceivedReports, (req, res) => {
  res.status(200).json({ success: true, result: res.locals.reports });
});

module.exports = conversationRouter;
