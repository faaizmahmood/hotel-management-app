var express = require('express');
var router = express.Router();
const multer = require('multer');
const connection = require("../database/sql");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.fields([
    { name: 'coverImage', maxCount: 1 },
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 }
]), function (req, res) {
    const { roomNo, roomType, roomServantName, servantContact, pricePerDay, roomDescription, availabilityStatus } = req.body;

    const coverImageURL = req.files['coverImage'] ? req.files['coverImage'][0].filename : null;
    const image1URL = req.files['image1'] ? req.files['image1'][0].filename : null;
    const image2URL = req.files['image2'] ? req.files['image2'][0].filename : null;

    console.log('Received data:', { roomNo, roomType, roomServantName, servantContact, pricePerDay, roomDescription, availabilityStatus });
    console.log('Received images:', { coverImageURL, image1URL, image2URL });

    const roomQuery = `
        INSERT INTO Rooms (RoomNo, RoomType, RoomServantName, ServantContact, PricePerDay, RoomDescription, AvailabilityStatus, CoverImageURL, Image1URL, Image2URL)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(roomQuery, [roomNo, roomType, roomServantName, servantContact, pricePerDay, roomDescription, availabilityStatus, coverImageURL, image1URL, image2URL], function (err) {
        if (err) {
            console.error('SQL Error:', err.message);
            return res.status(500).send('Error occurred while inserting room data.');
        }

        console.log('Room inserted successfully with images.');
        res.status(200).json({ message: 'Room and images added successfully!' });
    });
});

module.exports = router;
