var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var dbConnection = mysql.createConnection({
  host: 'localhost',
  database: 'chat',
  user: 'root', // student
  password: 'plantlife' // student
});

dbConnection.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log('Connected!');
});

module.exports = dbConnection;