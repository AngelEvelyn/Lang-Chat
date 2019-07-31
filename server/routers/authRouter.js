const { Router } = require('express');

const authController = require('../controllers/authController');

const authRouter = new Router();

authRouter.post('/signup', authController.signup, (req, res) => {
  res.status(200).json({ success: true, result: res.locals.user });
});

authRouter.post('/signin', authController.signin, (req, res) => {
  res.status(200).json({ success: true, result: res.locals.user });
});

module.exports = authRouter;
