const { v4: uuidv4 } = require('uuid')
    // import { v4 as uuidv4 } from 'uuid'
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//===================================================================================//
//===================================================================================//

async function createUser(user) {
    let newUser = await new User({
        // id: uuidv4(),
        username: user.username,
        email: user.email,
        password: user.password,

    });
    return newUser;
}


//===================================================================================//
//===================================================================================//
async function hashPassword(password) {
    let genSalt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, genSalt);
    return hashedPassword;
}

//===================================================================================//
//===================================================================================//

async function errorHandler(error) {
    let errorMessage = null;
    console.log(error);
    if (error.errmsg.includes('email_1')) {
        errorMessage = 'Email Already Exist! Please Choose Another One';
    } else if (error.errmsg.includes('username_1')) {
        errorMessage = 'Username Already Exist! Please Choose Another One';
    }
    return {
        status: 409,
        message: errorMessage
    };
}


//===================================================================================//
//===================================================================================//
async function findOneUser(email) {
    // console.log(email)
    try {
        let foundUser = await User.findOne({ email });
        console.log(foundUser)
        if (!foundUser) {
            return 404;
        }
        return foundUser;
    } catch (error) {
        return error;
    }

}


//===================================================================================//
//===================================================================================//



//===================================================================================//
//===================================================================================//

async function comparePassword(incomingPassword, userPassword) {
    try {

        let comparedPassword = await bcrypt.compare(incomingPassword, userPassword);
        if (comparedPassword) {
            return comparedPassword;
        } else {
            return 409;
        }

    } catch (error) {
        return error;
    }
}

//===================================================================================//
//===================================================================================//
async function createJwtToken(user) {
    let payload = {
        id: user._id,
        email: user.email,
        username: user.username
    }
    let jwtToken = await jwt.sign(payload, process.env.SECRET_KEY);
    // let jwtToken = await jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 3600 });
    return jwtToken;
}


//===================================================================================//
//===================================================================================//
module.exports = {
    hashPassword,
    errorHandler,
    createUser,
    findOneUser,
    comparePassword,
    createJwtToken
}