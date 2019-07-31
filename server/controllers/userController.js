const userModel = require('../models/userModel');

const userController = {
  async createUser(req, res, next) {
    const userParams = {
      username: req.body.username,
      email: req.body.email,
      pictureUrl: req.body.pictureUrl,
      aboutMe: req.body.aboutMe,
    };

    userParams.token = createToken(req.body.password);

    try {
      const newUser = await userModel.createUser(userParams);
      res.locals.user = newUser;
      return next();
    } catch (error) {
      return next(error);
    }
  },
};

function createToken(password) {
  return password;
}

module.exports = userController;
