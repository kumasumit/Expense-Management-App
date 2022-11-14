const express = require("express");
//import/require the usersController from controller folder
const transactionsController = require("../controllers/transactionsController");

//router object
const router = express.Router();
//routes
//add transaction POST Method
router.post("/add-transaction", transactionsController.addTransaction);
//get transaction GET Method
router.get("/get-transactions", transactionsController.getAllTransactions);
module.exports = router;
