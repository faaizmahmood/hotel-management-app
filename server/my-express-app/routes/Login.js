var express = require('express');
var router = express.Router();
const connection = require("../database/sql");
const bcrypt = require('bcrypt'); // To compare hashed passwords

router.post('/', function (req, res) {
    const { Email, Password } = req.body;

    // Validate required fields
    if (!Email || !Password) {
        return res.status(400).send('Email and Password are required.');
    }

    const query = 'SELECT * FROM Users WHERE Email = ?';

    connection.query(query, [Email], async function (err, results) {
        if (err) {
            console.error('SQL Error:', err.message);
            return res.status(500).send('Error occurred while fetching user data.');
        }

        if (results.length === 0) {
            return res.status(404).send('User does not exist.');
        }

        const user = results[0];

        try {
            // Compare the provided password with the hashed password in the database
            const match = await bcrypt.compare(Password, user.Password);

            if (match) {
                // Passwords match, return the user's role
                res.status(200).json({ role: user.Role });
            } else {
                // Passwords don't match
                res.status(401).send('Invalid credentials.');
            }
        } catch (error) {
            console.error('Error:', error.message);
            return res.status(500).send('Error occurred while processing your request.');
        }
    });
});

module.exports = router;
