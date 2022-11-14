const mongoose = require("mongoose");
//schema design

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required and should be unique"],
      unique: true,
      // this means there cannot be two users with the same email address
    },

    password: {
      type: String,
      required: [true, "password is required"],
      //   here password field is required
      //   and password is required is the error message
    },
  },
  {
    timestamps: true,
    // timestamps will save createdAt and updatedAt fields
  }
);

//export the model connected to the userSchema
const usersModal = mongoose.model("users", userSchema);
//here users in name of MongoDB collection in our MongoDB database
//ExpenseApp
module.exports = usersModal;
