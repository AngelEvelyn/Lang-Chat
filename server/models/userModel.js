const pool = require('./../pool');
const { toCamel } = require('../utils/caseConverters');

const INSERT_USER = 'INSERT INTO "user" (username, token, email, picture_url, about_me) VALUES ($1, $2, $3, $4, $5) RETURNING id, username, email, picture_url, about_me';
const GET_ALL = 'SELECT id, username, email, picture_url, about_me FROM "user" WHERE is_deleted=FALSE ORDER BY $1 OFFSET $2';
const GET_ALL_LIMITED = 'SELECT id, username, email, picture_url, about_me FROM "user" ORDER BY $1 LIMIT $2 OFFSET $3';
// const GET_BY = 'SELECT * FROM "user" WHERE ';
const DELETE_USER = 'UPDATE "user" SET is_deleted=TRUE WHERE id=$1 RETURNING id, username, email, picture_url, about_me';
const GET_USER = 'SELECT id, username, token, email, picture_url, about_me FROM "user" WHERE is_deleted=FALSE AND username=$1';

const model = {
  createUser({
    username, token, email, pictureUrl, aboutMe,
  }) {
    return new Promise((resolve, reject) => {
      const params = [username, token, email, pictureUrl, aboutMe];

      return pool.query(INSERT_USER, params, (error, result) => {
        if (error) return reject(error);
        const user = result.rows[0];
        if (!user) return reject(new Error('user not created, please try again'));
        const formattedUser = getFormattedUser(user);
        return resolve(formattedUser);
      });
    });
  },

  getAllUsers({ order, limit, offset }) {
    return new Promise((resolve, reject) => {
      const isLimitedQuery = typeof limit === 'number';
      const params = isLimitedQuery
        ? [order || 'username', limit, offset || 0]
        : [order || 'username', offset || 0];

      return pool.query(isLimitedQuery ? GET_ALL_LIMITED : GET_ALL, params, (error, result) => {
        if (error) return reject(error);
        const formattedUsers = result.rows.map(user => getFormattedUser(user));

        return resolve(formattedUsers);
      });
    });
  },

  deleteUser(userId) {
    return new Promise((resolve, reject) => {
      if (typeof userId !== 'number' || userId < 1) return reject(new Error(`invalid userId: ${userId}`));
      const params = [userId];

      return pool.query(DELETE_USER, params, (error, result) => {
        if (error) return reject(error);
        const deletedUser = result.rows[0];
        if (!deletedUser) return reject(new Error('no user found to delete'));
        const formattedUser = getFormattedUser(deletedUser);

        return resolve(formattedUser);
      });
    });
  },

  getUserAndTokenByUsername(username) {
    return new Promise((resolve, reject) => {
      if (typeof username !== 'string' || username.trim().length === 0) return reject(new Error(`invalid username: ${username}`));
      const params = [username];

      return pool.query(GET_USER, params, (error, result) => {
        if (error) return reject(error);
        const user = result.rows[0];
        const formattedUser = getFormattedUser(user);
        return resolve({ user: formattedUser, token: user.token });
      });
    });
  },
};

function getFormattedUser(user) {
  return toCamel(user, ['id', 'username', 'picture_url', 'about_me']);
}

module.exports = model;
