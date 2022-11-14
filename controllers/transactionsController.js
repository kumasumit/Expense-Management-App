const transactionsModal = require("../models/transactionsModal");

//An action to get all transactions
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await transactionsModal.find({});
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//An action to add a transaction
const addTransaction = async (req, res) => {
  try {
    //here we are going to create a new transaction using transactionsModal by passing req.body parameters
    const newTransaction = new transactionsModal(req.body);
    await newTransaction.save();
    res.status(201).json("Transaction Created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTransactions,
  addTransaction,
};
