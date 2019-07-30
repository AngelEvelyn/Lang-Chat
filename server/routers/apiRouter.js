const { Router } = require('express');

const userRouter = require('./userRouter');

const apiRouter = new Router();

apiRouter.user('/user', userRouter);

module.exports = apiRouter;