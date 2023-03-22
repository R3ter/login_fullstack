const mongoose = require("mongoose");

async function main() {
  return await mongoose.connect(
    "mongodb+srv://password:" +
      process.env.DBPASS +
      "@cluster0.47tub.mongodb.net/?retryWrites=true&w=majority"
  );
}
module.exports = main();
