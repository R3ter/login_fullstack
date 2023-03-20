const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");

const path = require("path");
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "vite-project", "dist")));
router.get("/test", (req, res) => {
  res.send("wadwadwa");
});
app.use("/", router);

app.listen(4000, () => {
  console.log("started");
});
