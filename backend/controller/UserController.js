const User = require("../model/UserModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const generateToken = require("../utils/generateToken");

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

      const userExists = await User.findOne({ email });

      if (!userExists) {
        await user.save();
        res.status(201).json({ message: "User registration successfull!!!" });
        return;
      } else {
        res.status(400).json({ message: "User already exists" });
        return;
      }
    } catch (err) {
      if (err.code === 11000) {
        if (err.keyPattern.email) {
          return res.status(400).json({ message: "Email is already in use" });
        }
        if (err.keyPattern.mobile) {
          return res
            .status(400)
            .json({ message: "Mobile number is already in use" });
        }
      }

      // Handle other errors
      res.status(500).json({ message: err.message || "Internal Server Error" });
    }
  };

  Login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all the fields!" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format!" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password should be at least 8 characters long" });
    }

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "Invalid Credentials!" });
      }

      const passwordMatch = bcrypt.compareSync(password, user.password);
      if (!passwordMatch) {
        return res.status(400).json({ message: "Invalid Password!" });
      }

      const token = generateToken(user._id);
      if (!token) {
        return res.status(500).json({ message: "Token generation failed!" });
      }

      return res.status(200).json({
        message: "Login successful!",
        user: {
          id: user._id,
          name: user.fullName,
          email: user.email,
          mobile: user.mobile,
          token,
        },
      });
    } catch (err) {
      console.error("Login Error:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
}

module.exports = UserController;
