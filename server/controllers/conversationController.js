const conversationModel = require('../models/conversationModel');
const conversationReportModel = require('../models/conversationReportModel');

const conversationController = {
    async createConversation(req, res, next){
        const params = {
            user_1_id: req.body.user_1_id ,
            user_2_id: req.body.user_2_id ,
            language: req.body.language,
            type: req.body.type, 
            length: req.body.length
        };

        try{
            const newConversation = await conversationModel.createConversation(params);
            res.locals.conversation = newConversation;
            return next();
        } catch (error){
            return next(error);
        };
    },

    async conversationReport(req, res, next){
        const params = {
            conversation_id: req.body.conversation_id,
            giver_id: req.body.giver_id,
            receiver_id: req.body.receiver_id,
            score: req.body.stars,
            review: req.body.review,
            reported_level: req.body.reported_level
        };

        try{
            const newReport = await conversationReportModel.reportCreator(params);
            res.locals.report = newReport;
            return next();
        } catch(error){
            return next(error);
        }
    }
}

module.exports = conversationController;