const User = require('../models/user');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { email, password } = req.body;

    const newUser = User({email, password});
    await newUser.save();

    const token = jwt.sign({_id: newUser._id}, 'secretkey')

    res.status(200).json({
        msg: "Succesfully user created",
        token
    });
}

module.exports = { 
    registerUser
}
