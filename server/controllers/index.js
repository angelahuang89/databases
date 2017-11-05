var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      model.messages.get(function(error, results) {
      	if (error) {
      	  throw error;
      	} else {
      	  res.json(results);
      	}
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var message = [req.body.message, req.body.roomname, req.body.username];
      model.messages.post(message, function(error, results) {
        if (error) {
          throw error;
        } else {
          res.sendStatus(201);
          res.end();
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(error, results) {
      	if (error) {
          throw error;
      	} else {
      	  res.json(results);
      	}
      })
    },
    post: function (req, res) {
      var user = [req.body.username];
      models.users.post(user, function(error, results) {
        if (error) {
          throw error;
        } else {
          res.sendStatus(201);
          res.end();
        }
      });
    }
  }
};

