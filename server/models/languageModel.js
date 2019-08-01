const pool = require('../pool');
const { toCamel } = require('../utils/caseConverters');

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "language"(
  language_id SERIAL PRIMARY KEY,
  label VARCHAR(80) REQUIRED UNIQUE,
)`;

pool.query(CREATE_TABLE, (error, _result) => {
  if (error) console.log('error creating language table:', error);
  else console.log('language table created or already existed');
});

const INSERT_LANGUAGE = 'INSERT INTO "language" (label) VALUES ($1)';

const UPDATE_LABEL = 'UPDATE "language" SET label=$2 WHERE language_id=$1 ';

const languageModel = {
  create(label) {
    return new Promise((resolve, reject) => {
      const params = [label];

      return pool.query(INSERT_LANGUAGE, params, (error, result) => {
        if (error) return reject(error);
        const newlanguage = result.rows[0];
        if (!newlanguage) return reject(new Error('language was not created'));

        const formattedlanguage = getFormattedlanguage(newlanguage);
        return resolve(formattedlanguage);
      });
    });
  },

  updateLabel({ languageId, label }) {
    return new Promise((resolve, reject) => {
      const params = [languageId, label];

      return pool.query(UPDATE_LABEL, params, (error, result) => {
        if (error) return reject(error);
        const updatedlanguage = result.rows[0];
        if (!updatedlanguage) return reject(new Error('language was not updated'));

        const formattedlanguage = getFormattedlanguage(updatedlanguage);
        return resolve(formattedlanguage);
      });
    });
  },
};

module.exports = languageModel;

function getFormattedlanguage(language) {
  return toCamel(language);
}
