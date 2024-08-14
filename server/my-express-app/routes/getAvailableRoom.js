var express = require('express');
var router = express.Router();
const connection = require("../database/sql");

router.get('/', function (req, res) {
    const query = 'SELECT * FROM rooms WHERE AvailabilityStatus = "Available"';

    connection.query(query, function (err, results) {
        if (err) {
            console.error('SQL Error:', err.message);
            return res.status(500).send('Error occurred while fetching room data.');
        }

        res.status(200).json(results);
    });
});

module.exports = router;
