const express = require("express");

const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { findCustomers, addCustomers } = require("./controllers");
dotenv.config({ path: "./config/config.env" });
connectDB();
const app = express();
app.use(express.json());

addCustomers()
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on ${PORT}`));
