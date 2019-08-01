const pool = require('../pool');
const { toCamel } = require('../utils/caseConverters');

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "conversation"(
  conversation_id SERIAL PRIMARY KEY,
  user_1_id INT NOT NULL,
  user_2_id INT NOT NULL,
  language VARCHAR(80) NOT NULL,
  type VARCHAR(80) NOT NULL,
  duration INT NOT NULL,
  user_1_level VARCHAR(80) NOT NULL,
  user_1_level VARCHAR(80) NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;


const INSERT_CONVERSATION = 'INSERT INTO "conversation"(user_1_id, user_2_id,language,type,length) VALUES ($1, $2, $3, $4, $5);';

pool.query(CREATE_TABLE, (error, _result) => {
  if (error) console.error('error creating Conversation table:', error);
  else console.log('Conversation table created or already exists');
});

const conversationModel = {
  createConversation({
    user1Id, user2Id, language, type, length,
  }) {
    return new Promise((resolve, reject) => {
      const params = [user1Id, user2Id, language, type, length];

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
