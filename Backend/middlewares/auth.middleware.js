const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../model/blacklisttoken.model');
const captainModel = require('../model/captain.model');

module.exports.authUser = async (req, res , next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1] ; //https headers are case generally not sensitive

    if(!token){
        return res.status(401).json({message: 'Unauthorized user'});
    }

    const isBlacklisted = await blackListTokenModel.findOne({token : token});

    if(isBlacklisted){
        return res.status(401).json({message: 'Unauthorized user'});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;
       
        return next();

    }catch(err){
        return res.status(401).json({message: 'Unauthorized user'});
    }
}

module.exports.authCaptain = async (req, res , next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1] ;

    if(!token){
        return res.status(401).json({message: 'Unauthorized user'});
    }

    const isBlacklisted = await blackListTokenModel.findOne({token : token});
    
    if(isBlacklisted){
        return res.status(401).json({message: 'Unauthorized user'});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);

        req.captain = captain;

        return next();

    }catch(err){
        return res.status(401).json({message: 'Unauthorized user'});
    }
}