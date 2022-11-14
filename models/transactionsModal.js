const mongoose = require("mongoose");
//schema design

const transactionsSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "you need to add a amount for the transaction"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    description: {
      type: String,
      required: [true, "you need to add a description for the transaction"],
    },
    reference: {
      type: String,
    },
    date: {
      type: Date,
      required: [true, "you need to add a date for the transaction"],
    },
  },
  {
    timestamps: true,
    // timestamps will save createdAt and updatedAt fields
  }
);

//export the model connected to the userSchema
const transactionsModal = mongoose.model("transactions", transactionsSchema);
//here users in name of MongoDB collection in our MongoDB database
//ExpenseApp
module.exports = transactionsModal;
