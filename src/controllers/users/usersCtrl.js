const expressAsyncHandler = require("express-async-handler");
const User = require("../../model/user");

// Register
const registerUser = expressAsyncHandler(async (req, res) => {
   const { email, firstname, lastname, password } = req?.body;
      // Check if user exists
      const userExists = await User.findOne({ email });
      if (userExists) throw new Error("User already exists");
      try {
      const user = await User.create({ email, firstname, lastname, password });
      res.status(200).json(user);
   } catch (error) {
      console.error(error);
      res.status(500).json('An error occurred'); // Handle the error and send an appropriate response
   }
}
);

//fetch all users
const fetchUsersctrl = expressAsyncHandler(async (req, res) => {
   try {
      const users = await User.find({});
      res.json(users);
   } catch (error) {
      res.json(error);
   }
   });

module.exports = { registerUser, fetchUsersctrl };
