const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
require("./database");

const path = require("path");
const signup = require("./Router/Signup");
const SignIn = require("./Router/Signin");
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "vite-project", "dist")));
app.use(bodyParser.json());

router.post("/login", SignIn);
router.post("/signup", signup);

app.use(router);
app.listen(4000, () => {
  console.log("started");
});
