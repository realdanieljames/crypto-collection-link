const {
    createUser,
    hashPassword,
    errorHandler,
    findOneUser,
    comparePassword,
    createJwtToken
} = require('./authHelper');

const UserSchema = require('../../users/model/User')

//===================================================================================//
//===================================================================================//


module.exports = {

    //===================================================================================//
    //===================================================================================//

    createNewAccount: async(req, res) => {
        console.log('gree')
        try {
            console.log(res)
            let newUser = await createUser(req.body);
            let hashedPassword = await hashPassword(newUser.password);
            newUser.password = hashedPassword;
            let savedUser = await newUser.save();
            res.status(200).json({
                message: 'Successfully signed up'
            });
        } catch (error) {
            let errorMessage = await errorHandler(error);
            res.status(errorMessage.status).json({
                message: errorMessage.message
            })
        }
    },

    //===================================================================================//
    //===================================================================================//
    login: async(req, res) => {
        try {
            let foundUser = await findOneUser(req.body.email);
            if (foundUser === 404) {
                throw {
                    status: 500,
                    message: 'User not found, please sign up'
                }
            }
            let comparedPassword = await comparePassword(req.body.password, foundUser.password);
            if (comparedPassword === 409) {
                throw {
                    status: 409,
                    message: 'Check your email and password'
                }
            }
            let jwtToken = await createJwtToken(foundUser);
            res.status(200).json({
                token: jwtToken
            });

        } catch (error) {
            res.status(error.status).json({
                message: error.message
            })
        }

    },
    //===================================================================================//
    //===================================================================================//


    getAllUsers: async(req, res) => {

        const allUsers = await UserSchema.find({})
        console.log(allUsers)
            // return allUsers
        res.status(200)
            .json({ confirmation: 'success', allUsers })
    },









    //===================================================================================//
    //===================================================================================//
    getData: async(req, res) => {


        console.log(req.body);
        try {
            let foundUser = await findOneUser(req.body.email)

            console.log(foundUser);

            res.json({ data: foundUser })





        } catch (error) {
            console.log(error);

        }



    },

    //===================================================================================//
    //===================================================================================//
    postData: async(req, res) => {


        try {
            let foundUser = await findOneUser(req.body.email)

            // console.log(req.body);

            // console.log(foundUser);

            foundUser.exercises = req.body.exercises
            foundUser.food = req.body.food.food
            foundUser.calories = req.body.food.totalCaloriesFromAddedFoods - req.body.calories




            await UserSchema.findOneAndUpdate({
                email: req.body.email
            }, {
                food: req.body.food.food,
                exercises: req.body.exercises,
                calories: req.body.food.totalCaloriesFromAddedFoods - req.body.calories
            })




            res.json({
                message: 'success'
            })
        } catch (error) {
            console.log(error);
        }


    }
}

//===================================================================================//
//===================================================================================//