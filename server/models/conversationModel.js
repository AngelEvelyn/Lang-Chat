const pg = require("pg");
const pool = require("../pool");

const CREATE_TABLE = 
`CREATE TABLE IF NOT EXISTS "conversation"(
    conversation_id SERIAL PRIMARY KEY,
    user_1_id INT,
    user_2_id INT,
    language VARCHAR(80),
    type VARCHAR(80),
    length INT
);`;

const INSERT_CONVERSATION = `INSERT INTO "conversation"(user_1_id, user_2_id,language,type,length) VALUES ($1, $2, $3, $4, $5);`;

pool.query(CREATE_TABLE, (err, result) => {
    err ? console.log('error creating Conversation table: ', err) : console.log('Conversation table created or already exists')
});

const conversationModel = {
    createConversation({user_1_id, user_2_id, language, type, length}){
       return new Promise((resolve, reject) => {
           pool.query(INSERT_CONVERSATION, [user_1_id, user_2_id, language, type, length], (err, result) => {
           err ? reject(err) : resolve(result)
           }); 
        });
    },
}

module.exports = conversationModel;