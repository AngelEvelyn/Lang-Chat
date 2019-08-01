const pool = require('../pool');
const { toCamel } = require('../utils/caseConverters');

const INSERT_USER_LANGUAGE = 'INSERT INTO "user_language" (user_id, language_id, level_id) VALUES ($1, $2, $3) RETURNING *';

const UPDATE_USER_LANGUAGE = 'UPDATE "user_language" SET level_id=$3 WHERE user_id=$1 AND language_id=$2 RETURNING *';

const DELETE_USER_LANGUAGE = 'DELETE FROM "user_language" WHERE user_id=$1 AND language_id=$2 RETURNING *';

const userLanguageModel = {
  create({ userId, languageId, levelId }) {
    return new Promise((resolve, reject) => {
      const params = [userId, languageId, levelId];

      return pool.query(INSERT_USER_LANGUAGE, params, (error, result) => {
        if (error) return reject(error);
        const newUserLanguage = result.rows[0];
        if (!newUserLanguage) return reject(new Error('userLanguage was not created'));

        const formattedUserLanguage = getFormattedUserLanguage(newUserLanguage);
        return resolve(formattedUserLanguage);
      });
    });
  },

  updateLevel({ userId, languageId, levelId }) {
    return new Promise((resolve, reject) => {
      const params = [userId, languageId, levelId];

      return pool.query(UPDATE_USER_LANGUAGE, params, (error, result) => {
        if (error) return reject(error);
        const updatedUserLanguage = result.rows[0];
        if (!updatedUserLanguage) return reject(new Error('userLanguage was not updated'));

        const formattedUserLanguage = getFormattedUserLanguage(updatedUserLanguage);
        return resolve(formattedUserLanguage);
      });
    });
  },

  delete({ userId, languageId }) {
    return new Promise((resolve, reject) => {
      const params = [userId, languageId];

      return pool.query(DELETE_USER_LANGUAGE, params, (error, result) => {
        if (error) return reject(error);
        const deletedUserLanguage = result.rows[0];
        if (!deletedUserLanguage) return reject(new Error('userLanguage was not deleted'));

        const formattedUserLanguage = getFormattedUserLanguage(deletedUserLanguage);
        return resolve(formattedUserLanguage);
      });
    });
  },
};

module.exports = userLanguageModel;

function getFormattedUserLanguage(userLanguage) {
  return toCamel(userLanguage);
}
