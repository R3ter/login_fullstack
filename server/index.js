const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
var jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');

const path = require("path");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "vite-project", "dist")));
router.post("/login", (req, res) => {
  var token = jwt.sign({ username: req.body.username }, "shhhhh");
  res.json(token);
});
app.use("/", router);

app.listen(4000, () => {
  console.log("started");
});
