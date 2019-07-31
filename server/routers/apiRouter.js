const { Router } = require('express');

const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const conversationRouter = require('./conversationRouter');

const apiRouter = new Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/conversation', conversationRouter);

module.exports = apiRouter;
