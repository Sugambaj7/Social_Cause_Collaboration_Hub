const User = require("../model/UserModel");

class UserController {
  SignUp = async (req, res) => {
    try {
      const { name, email, mobile, password, confirmPassword } = req.body;

      const user = new User({
        fullName: name,
        email,
        mobile,
        password,
        confirmPassword,
      });

      await user.save();

      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = UserController;
