const express = require('express'); 
const mongoose = require('mongoose');
const router = express.Router();

const User = require("../models/user");

// DB url
const db = "mongodb://localhost:27017/sociallogin";
mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(db, { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log('error! ' + err);
    }
    else {
        console.log('connected successfully');
    }
});

// Save User 
router.post('/saveUser', function (req, res) {
    var newUser = new User();
    newUser.userId = req.body.userId;
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.image = req.body.image;
    newUser.save(function (err, insertedUser) {
        if (!err) {
            res.json(insertedUser);
        }
        console.log('Error in saving user');
    });
});

// Get User
router.get('/getUser/:id', async function (req, res) {
    const getuser = await User.findOne({'_id': req.params.id});
    if (getuser) {
        res.json(getuser);
    }
    res.json('User Not Found');
});
module.exports = router;