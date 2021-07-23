const jwt = require('jsonwebtoken');

const verifyJwt = (req, res, next)=>{
    if(!req.headers.authorization){
        return res.status(401).json({msg: 'Unauthorized request'});
    }
    // console.log(req.headers.authorization)

    const token = req.headers.authorization.split(' ')[1];

    if(token === null){
        return res.status(401).json({msg: 'Unauthorized request'});
    }

    const payload = jwt.verify(token, 'secretkey');

    req.userId = payload._id;

    next();
}

module.exports = {
    verifyJwt
};