const pool = require('./../pool');
const { toCamel } = require('../utils/caseConverters');

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "user"(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(80) UNIQUE NOT NULL,
  token VARCHAR(80) NOT NULL, 
  email VARCHAR(255) UNIQUE NOT NULL,
  picture_url VARCHAR(255),
  about_me VARCHAR(255),
  registration_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  is_deleted BOOLEAN DEFAULT FALSE
);`;

// pool.query('DROP TABLE "user"', (error, _result) => {
//   if (error) console.log('error droping user table:', error);
//   else console.log('user table droped successfully');
// });

const INSERT_USER = 'INSERT INTO "user" (username, token, email, picture_url, about_me) VALUES ($1, $2, $3, $4, $5) RETURNING user_id, username, email, picture_url, about_me';
const GET_ALL = 'SELECT user_id, username, email, picture_url, about_me FROM "user" WHERE is_deleted=FALSE ORDER BY $1 OFFSET $2';
const GET_ALL_LIMITED = 'SELECT user_id, username, email, picture_url, about_me FROM "user" ORDER BY $1 LIMIT $2 OFFSET $3';
// const GET_BY = 'SELECT * FROM "user" WHERE ';
const DELETE_USER = 'UPDATE "user" SET is_deleted=TRUE WHERE user_id=$1 RETURNING user_id, username, email, picture_url, about_me';
const GET_USER = 'SELECT user_id, username, token, email, picture_url, about_me FROM "user" WHERE is_deleted=FALSE AND username=$1';


pool.query(CREATE_TABLE, (error, _result) => {
  if (error) console.log('error creating user table:', error);
  else console.log('user table created or already existed');
});

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
  return toCamel(user, ['user_id', 'username', 'picture_url', 'about_me']);
}

module.exports = model;
