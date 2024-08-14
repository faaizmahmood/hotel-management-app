const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'by4myxhhph3r1da5swlf-mysql.services.clever-cloud.com',
    user: 'ulz76m5ac16psfxr',
    password: '9Ya742yHzU0CnRaBr63K',
    database: 'by4myxhhph3r1da5swlf',
    port: '3306'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL as id', connection.threadId);
});

module.exports = connection;
