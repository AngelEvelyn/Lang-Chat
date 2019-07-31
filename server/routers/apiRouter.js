const { Router } = require('express');

const userRouter = require('./userRouter');
const conversationRouter = require('./conversationRouter');

const apiRouter = new Router();

apiRouter.use('/user', userRouter);
apiRouter.use('/conversation', conversationRouter);

module.exports = apiRouter;
