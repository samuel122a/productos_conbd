const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'basededatos'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('conectado en mysql');
});
module.exports = connection;