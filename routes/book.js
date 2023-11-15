const express = require("express");
const { createBook } = require("../controllers/bookController");

const bookRouter = express.Router();

bookRouter.post("/", createBook)

module.exports = { bookRouter };
