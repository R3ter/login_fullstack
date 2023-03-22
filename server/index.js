const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const router = express.Router();
const cors = require("cors");
var jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');

const path = require("path");
const database = require("./database");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "vite-project", "dist")));
<<<<<<< HEAD


database.then((e) => {
  console.log(e);
});

router.get("/login", (req, res) => {
  res.json({ error: true, msg: "username or password is incorrect" });
=======
router.post("/login", (req, res) => {
  var token = jwt.sign({ username: req.body.username }, "shhhhh");
  res.json(token);
>>>>>>> main
});
app.use("/", router);

app.listen(4000, () => {
  console.log("started");
});
