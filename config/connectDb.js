const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Server running On: ${mongoose.connection.host}`.bgCyan.white);
    // this will make backgroundcolor cyan and text color white for the console

    
  } catch (error) {
    console.log(`${error}`.bgRed);
    // this will give the error of catch block a background color of colors.red
  }
};

module.exports = connectDb
