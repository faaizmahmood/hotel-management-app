var express = require('express');
var router = express.Router();
const connection = require("../database/sql");
const bcrypt = require('bcrypt');

router.post('/', async function (req, res) {
    console.log('Request Body:', req.body);
    const { Name, Email, Contact, Password, Role } = req.body;

    if (!Name || !Email || !Password) {
        return res.status(400).send('Name, Email, and Password are required.');
    }

    try {
        const hashedPassword = await bcrypt.hash(Password, 10);

        const query = `
            INSERT INTO Users (Name, Email, Contact, Password, Role) 
            VALUES (?, ?, ?, ?, ?)
        `;

        connection.query(
            query,
            [Name, Email, Contact, hashedPassword, Role || 'Guest'],
            function (err, results) {
                if (err) {
                    console.error('SQL Error:', err.message);
                    return res.status(500).send('Error occurred while saving user data.');
                }

                res.status(201).json({ message: 'User created successfully', userID: results.insertId });
            }
        );
    } catch (error) {
        console.error('Error:', error.message);
        return res.status(500).send('Error occurred while processing your request.');
    }
});

module.exports = router;
