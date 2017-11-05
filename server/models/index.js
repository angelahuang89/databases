var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.dbConnection.query('SELECT * FROM messages', function(err, results) {
        if (err) {
          throw error;
        } else {
          callback(results);
        }
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      var queryString = 'INSERT INTO messages (text, roomname, userid) VALUES (?, ?, (select userid from users where username = ?))';
      db.dbConnection.query(queryString, message, function(err, results) {
        if (err) {
          throw error;
        } else {
          callback(results);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.dbConnection.query('SELECT * FROM users', function(err, results) {
        if (err) {
          throw error;
        } else {
          callback(results);
        }
      })

    },
    post: function (username, callback) {
      var queryString = 'INSERT INTO users (username) VALUES(?)';
      db.dbConnection.query(queryString, username, function(err, results) {
        if (err) {
          throw error;
        } else {
          callback(results);
        }
      })
    }
  }
};

