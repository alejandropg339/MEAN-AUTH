const User = require('../models/user');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email});

    if(!user) return res.status(401).json({message:"The email doesn't exists"});
    if(user.password !== password) return res.status(401).json({message: "Wrong password"});

    const token = jwt.sign({_id: user._id}, 'secretkey');
    return res.status(200).json({
        msg:"successfully loged",
        token
    });
}

module.exports = { 
    loginUser
}