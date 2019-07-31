const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = new Router();

userRouter.get('/getAll', userController.getAllUsers, (req, res) => {
  res.status(200).json({ success: true, result: res.locals.users });
});

userRouter.delete('/delete', userController.deleteUser, (req, res) => {
  res.status(200).json({ success: true, result: res.locals.user });
});

module.exports = userRouter;
