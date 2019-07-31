const { Router } = require('express');

const userController = require('../controllers/userController');

const userRouter = new Router();

userRouter.post('/create', userController.createUser, (req, res) => {
  res.status(200).json({ success: true, message: 'user successfully created' });
});

module.exports = userRouter;
