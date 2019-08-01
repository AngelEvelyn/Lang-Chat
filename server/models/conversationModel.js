const pool = require('../pool');
const { toCamel } = require('../utils/caseConverters');

const INSERT_CONVERSATION = 'INSERT INTO "conversation"(user_1_id, user_2_id,language_id,type,duration,user_1_level, user_2_level) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;';

const conversationModel = {
  create({
    user1Id, user2Id, languageId, type, duration, user1Level, user2Level,
  }) {
    return new Promise((resolve, reject) => {
      const params = [user1Id, user2Id, languageId, type, duration, user1Level, user2Level];

      pool.query(INSERT_CONVERSATION, params, (error, result) => {
        if (error) return reject(error);
        const conversation = result.rows[0];
        if (!conversation) return reject(new Error('something went wrong creating the conversation'));

        const formattedConversation = getFormattedConversation(conversation);
        return resolve(formattedConversation);
      });
    });
  },
};

function getFormattedConversation(report) {
  return toCamel(report);
}

module.exports = conversationModel;
