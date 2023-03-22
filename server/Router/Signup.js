const { signToken } = require("../auth/Token");
const users = require("../models/users");
const signup = async (req, res) => {
  const { username, name } = req.body;
  await new users({
    email: req.body.username,
    name: req.body.name,
    password: req.body.password,
  })
    .save()
    .then((e) => {
      res.json({
        token: signToken({ id: e._id, username, name }),
        error: false,
      });
    })
    .catch((error) => {
      console.log(error);
      if (error.name === "MongoServerError" && error.code === 11000) {
        return res.json({
          error: true,
          msg: "username already exists",
        });
      }
      res.json({
        error: true,
        msg: "internal server error",
      });
    });
};

module.exports = signup;
