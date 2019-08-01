const pool = require('../pool');
const { toCamel } = require('../utils/caseConverters');

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "level"(
  level_id SERIAL PRIMARY KEY,
  label VARCHAR(80) REQUIRED UNIQUE,
)`;

pool.query(CREATE_TABLE, (error, _result) => {
  if (error) console.log('error creating level table:', error);
  else console.log('level table created or already existed');
});

const INSERT_LEVEL = 'INSERT INTO "level" (label) VALUES ($1)';

const UPDATE_LABEL = 'UPDATE "level" SET label=$2 WHERE level_id=$1 ';

const levelModel = {
  create(label) {
    return new Promise((resolve, reject) => {
      const params = [label];

      return pool.query(INSERT_LEVEL, params, (error, result) => {
        if (error) return reject(error);
        const newLevel = result.rows[0];
        if (!newLevel) return reject(new Error('level was not created'));

        const formattedLevel = getFormattedLevel(newLevel);
        return resolve(formattedLevel);
      });
    });
  },

  updateLabel({ levelId, label }) {
    return new Promise((resolve, reject) => {
      const params = [levelId, label];

      return pool.query(UPDATE_LABEL, params, (error, result) => {
        if (error) return reject(error);
        const updatedLevel = result.rows[0];
        if (!updatedLevel) return reject(new Error('level was not updated'));

        const formattedLevel = getFormattedLevel(updatedLevel);
        return resolve(formattedLevel);
      });
    });
  },
};

module.exports = levelModel;

function getFormattedLevel(level) {
  return toCamel(level);
}
