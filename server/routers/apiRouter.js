const { Router } = require('express');

const userRouter = require('./userRouter');

const apiRouter = new Router();

apiRouter.use('/user', userRouter);

module.exports = apiRouter;