class UserController {
  SignUp = async (req, res) => {
    try {
      console.log("hello from user controller");
      console.log(req.body, "req body from user controller");
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = UserController;
