const pool = require('../pool');
const { toCamel } = require('../utils/caseConverters');

const INSERT_LEVEL = 'INSERT INTO "level" (label) VALUES ($1) RETURNING *;';

const UPDATE_LABEL = 'UPDATE "level" SET label=$2 WHERE id=$1 RETURNING *;';

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
