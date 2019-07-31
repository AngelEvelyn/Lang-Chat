const conversationModel = require('../models/conversationModel');

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
    }
}

module.exports = conversationController;