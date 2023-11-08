const express = require('express');
const { registerUser, fetchUsersctrl } = require('../../controllers/users/usersCtrl');

const userRoute = express.Router();

userRoute.post('/register', registerUser);
userRoute.get("/", fetchUsersctrl);
module.exports = userRoute;