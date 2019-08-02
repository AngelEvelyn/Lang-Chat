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

  async getAllUsers(req, res, next) {
    const filteringParams = {
      order: req.body.order || null,
      limit: req.body.limit || null,
      offset: req.body.offset || null,
    };

    try {
      const users = await userModel.getAllUsers(filteringParams);
      res.locals.users = users;
      return next();
    } catch (error) {
      return next(error);
    }
  },

  async deleteUser(req, res, next) {
    const { userId } = req.body;

    try {
      const user = await userModel.deleteUser(userId);
      res.locals.user = user;
      return next();
    } catch (error) {
      return next(error);
    }
  },

  async getUserWithLanguages(req, res, next) {
    const { userId } = req.params;

    try {
      const user = await userModel.getUserWithLanguagesByUserId(userId);
      res.locals.user = user;
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
