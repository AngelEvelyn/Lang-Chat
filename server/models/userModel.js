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

const INSERT_USER = 'INSERT INTO "user" (username, token, email, picture_url, about_me) VALUES ($1, $2, $3, $4, $5)';
const GET_ALL = 'SELECT * FROM "user"';


pool.query(CREATE_TABLE, (error, _result) => {
  if (error) console.log('error creating user table:', error);
  else console.log('user table created or already existed');
});

const model = {
  createUser({
    username, token, email, pictureUrl, aboutMe,
  }) {
    return new Promise((resolve, reject) => {
      pool.query(
        INSERT_USER,
        [username, token, email, pictureUrl, aboutMe],
        (error, result) => {
          if (error) return reject(error);
          return resolve(result);
        },
      );
    });
  },

  getAllUsers() {
    return new Promise((resolve, reject) => {
      pool.query(GET_ALL, (error, result) => {
        if (error) return reject(error);
        return resolve(result);
      });
    });
  },
};

module.exports = model;
