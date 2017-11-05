var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', [], function(error, results) {
        if (error) {
          throw error;
        } else {
          callback(null, results);
        }
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      var queryString = 'INSERT INTO messages (text, roomname, userid) VALUES (?, ?, (SELECT userid FROM users WHERE username = ?))';
      // var queryString = 'INSERT INTO messages (text, roomname, username) VALUES (?, ?, ?))';
      db.query(queryString, message, function(error, results) {
        if (error) {
          throw error;
        } else {
          callback(null, results);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users', [], function(error, results) {
        if (error) {
          throw error;
        } else {
          callback(null, results);
        }
      });

    },
    post: function (username, callback) {
      var queryString = 'INSERT INTO users (username) VALUES (?)';
      db.query(queryString, username, function(error, results) {
        if (error) {
          throw error;
        } else {
          callback(null, results);
        }
      });
    }
  }
};

