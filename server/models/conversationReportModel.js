const pool = require('../pool');
const { toCamel } = require('../utils/caseConverters');

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS "reports"(
  report_id SERIAL PRIMARY KEY,
  conversation_id INT,
  giver_id INT,
  receiver_id INT,
  score INT,
  review VARCHAR(255),
  reported_level VARCHAR(80),
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

pool.query(CREATE_TABLE, (error, _result) => {
  if (error) console.error('unsuccessful request to create Reports table: ', error);
  else console.log('Reports table has been successfully created or already exists');
});

const INSERT_REPORT = `INSERT INTO "reports"
  (conversation_id,giver_id,receiver_id,score,review,reported_level)
  VALUES ($1, $2, $3, $4, $5, $6)
;`;

const SELECT_BY_RECEIVER_ID = `SELECT conversation_id, giver_id, score, review, reported_level, date
  FROM "reports" WHERE receiver_id=$1 ORDER BY date
;`;

const conversationReportModel = {
  createReport({
    conversationId, giverId, receiverId, score, review, reportedLevel,
  }) {
    return new Promise((resolve, reject) => {
      const params = [conversationId, giverId, receiverId, score, review, reportedLevel];

      return pool.query(INSERT_REPORT, params, (err, result) => {
        if (err) return reject(err);
        const report = result.rows[0];
        if (!report) return reject(new Error('something went wrong creating the report'));

        const formattedReport = getFormattedReport(report);
        return resolve(formattedReport);
      });
    });
  },

  getUserReceivedReports(userId) {
    return new Promise((resolve, reject) => {
      const params = [userId];

      return pool.query(SELECT_BY_RECEIVER_ID, params, (error, result) => {
        if (error) return reject(error);
        const reports = result.rows.map(report => getFormattedReport(report));
        return resolve(reports);
      });
    });
  },
};

function getFormattedReport(report) {
  return toCamel(report);
}

module.exports = conversationReportModel;
