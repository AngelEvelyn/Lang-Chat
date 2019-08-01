const userModel = require('../models/userModel');

const authController = {
  async signup(req, res, next) {
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

  async signin(req, res, next) {
    const { username, password } = req.body;

    try {
      const { user, token } = await userModel.getUserAndTokenByUsername(username);
      const isValidLogin = validatePassword(password, token);
      if (!isValidLogin) return next(new Error('invalid username and/or password'));
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

function validatePassword(password, token) {
  if (!token) return false;
  return createToken(password) === token;
}

module.exports = authController;
