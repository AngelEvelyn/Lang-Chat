const pool = require('../pool');
const { toCamel } = require('../utils/caseConverters');

const INSERT_REPORT = `INSERT INTO "conversation_report"
  (conversation_id,giver_id,receiver_id,score,review,reported_level)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *
;`;

const SELECT_BY_RECEIVER_ID = 'SELECT * FROM "conversation_report" WHERE receiver_id=$1 ORDER BY date;';

const conversationReportModel = {
  create({
    conversationId, giverId, receiverId, score, review, reportedLevelId,
  }) {
    return new Promise((resolve, reject) => {
      const params = [conversationId, giverId, receiverId, score, review, reportedLevelId];

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
