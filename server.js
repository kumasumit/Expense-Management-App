const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDB");
//config dotenv file
dotenv.config();
//connect and call database
connectDb();
//rest object
const app = express();
//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//home api
app.get("/", (req, res) => {
  res.send("Hello from Express Server");
});
//routes
//users api route
//this tells the app to use usersRoute.js inside routes folder for the link wesite/api/v1
app.use("/api/v1/users", require("./routes/usersRoute"));
//port
const PORT = process.env.PORT || 8080;

//listen server on port
app.listen(PORT, () =>
  console.log(`Expense Manager App is listening on port ${PORT}!`)
);
