const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const router = express.Router();
const cors = require("cors");

const path = require("path");
const database = require("./database");
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "vite-project", "dist")));


database.then((e) => {
  console.log(e);
});

router.get("/login", (req, res) => {
  res.json({ error: true, msg: "username or password is incorrect" });
});
app.use("/", router);

app.listen(4000, () => {
  console.log("started");
});
