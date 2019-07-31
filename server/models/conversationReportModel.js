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

pool.query(CREATE_TABLE, (error, _result) => {
  if (error) console.error('unsuccessful request to create Reports table: ', error);
  else console.log('Reports table has been successfully created or already exists');
});

const INSERT_REPORT = `INSERT INTO "reports"
  (conversation_id,giver_id,receiver_id,score,review,reported_level)
  VALUES ($1, $2, $3, $4, $5, $6)
;`;

const conversationReportModel = {
  reportCreator({
    conversationId, giverId, receiverId, score, review, reportedLevel,
  }) {
    return new Promise((resolve, reject) => {
      const params = [conversationId, giverId, receiverId, score, review, reportedLevel];

      return pool.query(INSERT_REPORT, params, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  },
};

module.exports = conversationReportModel;
