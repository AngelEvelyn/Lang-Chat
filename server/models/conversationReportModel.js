const pool = require('../pool');

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "reports"(
    report_id SERIAL PRIMARY KEY,
    conversation_id INT,
    giver_id INT,
    receiver_id INT,
    score INT,
    review VARCHAR(255),
    reported_level VARCHAR(80)
);`;

pool.query(CREATE_TABLE, (err, res) => {
    err ? console.log(`unsuccessful request to create Reports table: `, err) : console.log("Reports table has been successfully created or already exists");
});

const INSERT_REPORT = `INSERT INTO "reports"(conversation_id,giver_id,receiver_id,score,review,reported_level) VALUES ($1, $2, $3, $4, $5, $6);`;

const conversationReportModel = {
    reportCreator({ conversation_id, giver_id, receiver_id, score, review, reported_level }){
        return new Promise((resolve, reject) => {
            pool.query(INSERT_REPORT, [conversation_id,giver_id,receiver_id,score,review,reported_level], (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }
};

module.exports = conversationReportModel;