const conversationModel = require('../models/conversationModel');
const conversationReportModel = require('../models/conversationReportModel');

const conversationController = {
  async createConversation(req, res, next) {
    const params = {
      user1Id: req.body.user1Id,
      user2Id: req.body.user2Id,
      language: req.body.language,
      type: req.body.type,
      length: req.body.length,
    };

    try {
      const newConversation = await conversationModel.createConversation(params);
      res.locals.conversation = newConversation;
      return next();
    } catch (error) {
      return next(error);
    }
  },

  async createConversationReport(req, res, next) {
    const params = {
      conversationId: req.body.conversationId,
      giverId: req.body.giverId,
      receiverId: req.body.receiverId,
      score: req.body.stars,
      review: req.body.review,
      reportedLevel: req.body.reportedLevel,
    };

    try {
      const newReport = await conversationReportModel.createReport(params);
      res.locals.report = newReport;
      return next();
    } catch (error) {
      return next(error);
    }
  },

  async getUserReceivedReports(req, res, next) {
    const { userId } = req.params;

    try {
      const reports = await conversationReportModel.getUserReceivedReports(userId);
      res.locals.reports = reports;
      return next();
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = conversationController;
