const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
var cookieParser = require("cookie-parser");
const router = express.Router();
const cors = require("cors");
app.use(cookieParser());
const bodyParser = require("body-parser");
app.use(
  cors({
    credentials: true,
    preflightContinue: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    origin: true,
  })
);
require("./database");

const path = require("path");
const signup = require("./Router/Signup");
const SignIn = require("./Router/Signin");
app.use(express.static(path.join(__dirname, "..", "vite-project", "dist")));
app.use(bodyParser.json());
router.post("/login", SignIn);
router.post("/signup", signup);

app.use(router);
app.listen(4000, () => {
  console.log("started");
});
