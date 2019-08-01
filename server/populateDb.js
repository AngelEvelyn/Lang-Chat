const pool = require('./pool');
const conversationModel = require('./models/conversationModel');
const conversationReportModel = require('./models/conversationReportModel');
const languageModel = require('./models/languageModel');
const levelModel = require('./models/levelModel');
const userLanguageModel = require('./models/userLanguageModel');
const userModel = require('./models/userModel');

const CREATE_LANGUAGE_TABLE = `CREATE TABLE IF NOT EXISTS "language"(
  id SERIAL PRIMARY KEY,
  label VARCHAR(80) NOT NULL UNIQUE
);`;

const CREATE_CONVERSATION_TABLE = `CREATE TABLE IF NOT EXISTS "conversation"(
  id SERIAL PRIMARY KEY,
  user_1_id INTEGER NOT NULL REFERENCES "user"(id) ON DELETE RESTRICT,
  user_2_id INTEGER NOT NULL REFERENCES "user"(id) ON DELETE RESTRICT,
  language_id INTEGER NOT NULL REFERENCES "language"(id) ON DELETE RESTRICT,
  type VARCHAR(80) NOT NULL,
  duration INTEGER NOT NULL,
  user_1_level INTEGER NOT NULL REFERENCES "level"(id) ON DELETE RESTRICT,
  user_2_level INTEGER NOT NULL REFERENCES "level"(id) ON DELETE RESTRICT,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

const CREATE_CONVERSATION_REPORT_TABLE = `CREATE TABLE IF NOT EXISTS "conversation_report"(
  id SERIAL PRIMARY KEY,
  conversation_id INTEGER NOT NULL REFERENCES "conversation"(id) ON DELETE RESTRICT,
  giver_id INTEGER NOT NULL REFERENCES "user"(id) ON DELETE RESTRICT,
  receiver_id INTEGER NOT NULL REFERENCES "user"(id) ON DELETE RESTRICT,
  score INTEGER NOT NULL,
  review VARCHAR(255) NOT NULL,
  reported_level INTEGER NOT NULL REFERENCES "level"(id) ON DELETE RESTRICT,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

const CREATE_USER_TABLE = `CREATE TABLE IF NOT EXISTS "user"(
  id SERIAL PRIMARY KEY,
  username VARCHAR(80) UNIQUE NOT NULL,
  token VARCHAR(80) NOT NULL, 
  email VARCHAR(255) UNIQUE NOT NULL,
  picture_url VARCHAR(255),
  about_me VARCHAR(255),
  registration_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  is_deleted BOOLEAN DEFAULT FALSE
);`;

const CREATE_USER_LANGUAGE_TABLE = `CREATE TABLE IF NOT EXISTS "user_language"(
  user_id INTEGER NOT NULL REFERENCES "user" (id) ON DELETE RESTRICT,
  language_id INTEGER NOT NULL REFERENCES "language" (id) ON DELETE RESTRICT,
  level_id INTEGER NOT NULL REFERENCES "level" (id) ON DELETE RESTRICT,
  PRIMARY KEY (user_id, language_id)
);`;

const CREATE_LEVEL_TABLE = `CREATE TABLE IF NOT EXISTS "level"(
  id SERIAL PRIMARY KEY,
  label VARCHAR(80) NOT NULL UNIQUE
);`;


pool.query('DROP TABLE IF EXISTS "conversation", "conversation_report", "language", "level", "user_language", "user";', (error, _result) => {
  if (error) console.log('error droping tables:', error);
  else console.log('tables droped successfully');
});

pool.query(CREATE_USER_TABLE, (error, _result) => {
  if (error) console.log('error creating user table:', error);
  else console.log('user table created or already existed');
});

pool.query(CREATE_LANGUAGE_TABLE, (error, _result) => {
  if (error) console.log('error creating language table:', error);
  else console.log('language table created or already existed');
});

pool.query(CREATE_LEVEL_TABLE, (error, _result) => {
  if (error) console.log('error creating level table:', error);
  else console.log('level table created or already existed');
});

pool.query(CREATE_USER_LANGUAGE_TABLE, (error, _result) => {
  if (error) console.log('error creating user_language table:', error);
  else console.log('user_language table created or already existed');
});

pool.query(CREATE_CONVERSATION_TABLE, (error, _result) => {
  if (error) console.error('error creating conversation table:', error);
  else console.log('conversation table created or already exists');
});

pool.query(CREATE_CONVERSATION_REPORT_TABLE, (error, _result) => {
  if (error) console.error('error creating conversation_report: ', error);
  else console.log('reports table has been successfully created or already exists');
});

function User(username, token, email, pictureUrl, aboutMe) {
  this.username = username;
  this.token = token;
  this.email = email;
  this.pictureUrl = pictureUrl;
  this.aboutMe = aboutMe;
}

const users = [
  new User('nahuel', '123', 'n@n.com', 'fakeUrl', 'benjamin button'),
  new User('angel', '123', 'a@a.com', 'fakeUrl2', 'i\'m angel'),
  new User('javs', '123', 'j@j.com', 'fakeUrl3', 'some info'),
  new User('tarlan', '123', 't@t.com', 'fakeUrl4', 'some info but this times a bit longer'),
  new User('brian', '123', 'b@b.com', 'https://www.xyzapk.com/wp-content/uploads/2017/11/com.firitools.firitools.imagenegative.jpg.png', 'this time a really long strig, maybe even with some latin to extend it further. Nah, too lazy to look for an lorem ipsum generator. This is fine'),
  new User('dean', '123', 'd@d.com', 'https://www.xyzapk.com/wp-content/uploads/2017/11/com.firitools.firitools.imagenegative.jpg.png', 'last user to join the party'),
];

users.forEach(async (user) => {
  const newUser = await userModel.createUser(user);
  console.log('user created:', newUser);
});

function Language(label) {
  this.label = label;
}

const languages = [
  new Language('english'),
  new Language('spanish'),
  new Language('german'),
  new Language('dutch'),
  new Language('russian'),
];

languages.forEach(async (language) => {
  const newLanguage = await languageModel.create(language);
  console.log('language created:', newLanguage);
});

function Level(label) {
  this.label = label;
}

const levels = [
  new Level('basic'),
  new Level('intermediate'),
  new Level('advanced'),
  new Level('native'),
];

levels.forEach(async (level) => {
  const newLevel = await levelModel.create(level);
  console.log('level created:', newLevel);
});

function UserLanguage(userId, languageId, levelId) {
  this.userId = userId;
  this.languageId = languageId;
  this.levelId = levelId;
}

const userLanguages = [
  new UserLanguage(1, 1, 1),
  new UserLanguage(1, 2, 4),
  new UserLanguage(2, 1, 3),
  new UserLanguage(2, 4, 4),
  new UserLanguage(3, 1, 2),
  new UserLanguage(3, 2, 4),
  new UserLanguage(4, 1, 2),
  new UserLanguage(5, 1, 4),
  new UserLanguage(5, 2, 3),
  new UserLanguage(5, 3, 4),
  new UserLanguage(5, 4, 2),
  new UserLanguage(6, 1, 1),
  new UserLanguage(6, 2, 2),
  new UserLanguage(6, 3, 3),
  new UserLanguage(6, 4, 4),
  new UserLanguage(6, 5, 2),
];

userLanguages.forEach(async (userLanguage) => {
  const newUserLanguage = await userLanguageModel.create(userLanguage);
  console.log('userLanguage created:', newUserLanguage);
});

function Conversation(user1Id, user2Id, languageId, type, duration, user1Level, user2Level) {
  this.user1Id = user1Id;
  this.user2Id = user2Id;
  this.languageId = languageId;
  this.type = type;
  this.duration = duration;
  this.user1Level = user1Level;
  this.user2Level = user2Level;
}

const conversations = [
  new Conversation(1, 2, 1, 'video', 30, 2, 3),
  new Conversation(1, 2, 1, 'audio', 23, 1, 3),
  new Conversation(1, 3, 1, 'audio', 67, 3, 3),
  new Conversation(1, 4, 1, 'audio', 25, 1, 4),
  new Conversation(2, 4, 1, 'audio', 31, 3, 2),
  new Conversation(5, 6, 1, 'video', 123, 1, 2),
];

conversations.forEach(async (conversation) => {
  const newConversation = await conversationModel.create(conversation);
  console.log('conversation created:', newConversation);
});

function ConversationReport(conversationId, giverId, receiverId, score, review, reportedLevelId) {
  this.conversationId = conversationId;
  this.giverId = giverId;
  this.receiverId = receiverId;
  this.score = score;
  this.review = review;
  this.reportedLevelId = reportedLevelId;
}

const conversationReports = [
  new ConversationReport(1, 1, 2, 5, 'great conv', 3),
  new ConversationReport(1, 2, 1, 3, 'not so great conv', 2),
  new ConversationReport(2, 2, 1, 4, 'nice, he improved', 3),
  new ConversationReport(6, 5, 6, 5, 'also a great conv, really good! Want to do it again', 4),
];

conversationReports.forEach(async (conversationReport) => {
  const newConversationReport = await conversationReportModel.create(conversationReport);
  console.log('conversationReport created:', newConversationReport);
});
