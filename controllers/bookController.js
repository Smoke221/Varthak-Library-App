const { bookModel } = require("../models/bookModel");

async function createBook(req, res) {
  try {
    const userID = req.body.userID;
    const role = req.body.userRole;

    if (role.includes("creator")) {
      const newBook = new bookModel({
        title: req.body.title,
        createdBy: userID,
      });

      await newBook.save();

      res.status(201).json({ message: "Book created successfully" });
    } else {
      res.status(403).json({ message: "Forbidden" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
}

module.exports = { createBook };
