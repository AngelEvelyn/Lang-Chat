const pool = require('./../pool');

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "user"(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(80) UNIQUE NOT NULL,
  token VARCHAR(80) NOT NULL, 
  email VARCHAR(255) UNIQUE NOT NULL,
  picture_url VARCHAR(255),
  about_me VARCHAR(255),
  registration_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`;

const INSERT_USER = 'INSERT INTO "user" (username, token, email, picture_url, about_me, is_deleted) VALUES ($1, $2, $3, $4, $5) RETURNING user_id, username, email, picture_url, about_me';
const GET_ALL = 'SELECT * FROM "user" ORDER BY $1 LIMIT $2 OFFSET $3';
const GET_BY = 'SELECT * FROM "user" WHERE ';
const DELETE_USER = 'UPDATE "user" SET is_deleted=true WHERE user_id = $1 RETURNING user_id, username, email, picture_url, about_me';


pool.query(CREATE_TABLE, (error, _result) => {
  if (error) console.log('error creating user table:', error);
  else console.log('user table created or already existed');
});

const model = {
  createUser({
    username, token, email, pictureUrl, aboutMe,
  }) {
    const params = [username, token, email, pictureUrl, aboutMe];

    return new Promise((resolve, reject) => {
      pool.query(INSERT_USER, params, (error, result) => {
        if (error) return reject(error);
        return resolve(result);
      });
    });
  },

  getAllUsers({ order, limit, offset }) {
    const params = [order || 'username', limit || 'ALL', offset || 0];

    return new Promise((resolve, reject) => {
      pool.query(GET_ALL, params, (error, result) => {
        if (error) return reject(error);
        return resolve(result);
      });
    });
  },

  deleteUser(userId) {
    const params = [userId];

    return new Promise((resolve, reject) => {
      pool.query(DELETE_USER, params, (error, result) => {
        if (error) return reject(error);
        return resolve(result);
      });
    });
  },
};

module.exports = model;
