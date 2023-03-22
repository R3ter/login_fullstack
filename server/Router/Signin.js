const { signToken } = require("../auth/Token");
const users = require("../models/users");
module.exports = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.json({
      error: true,
      msg: "username or password is not provided",
    });
  }
  users
    .find({ email: req.body.username, password: req.body.password })
    .then((e) => {
      e = e[0];
      if (e)
        res.json({
          error: false,
          msg: "",
          token: signToken({ username: e.email, id: e.id, name: e.name }),
        });
      else
        res.json({
          error: true,
          msg: "username or password is incorrect",
        });
    });
};
