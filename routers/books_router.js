const exp = require("express");
const my_books_router = exp.Router();
const { my_books_model } = require("../models/books_model");

// Add
my_books_router.post("/register", async (request, response) => {
  const { Title, Author, Genre, Description, Price } = request.body;
  try {
    const apple = new my_books_model({ Title, Author, Genre, Description, Price });
    await apple.save();
    response.status(201).send({ messages: "Addition of book is completed" });
  } catch (er) {
    response.status(401).send({ messages: er.message });
  }
});

// Retrieve
my_books_router.get("/get", async (request, response) => {
  try {
    const every_item = await my_books_model.find();
    response.status(200).send(every_item);
  } catch (er) {
    response.status(400).send({ "messages": er.message });
  }
});

// Delete
my_books_router.delete("/delete/:book_id", async (request, response) => {
  const superv = request.body;
  const book_id = request.params.book_id;
  try {
    await my_books_model.findByIdAndDelete({ _id: book_id });
    response.status(200).send({ messages: "deletion of item is completed" });
  } catch (er) {
    response.status(400).send({ "messages": er.message });
  }
});

// Filter
my_books_router.get("/filter", async (request, response) => {
  try {
    const purpose = await my_books_model.find({ Genre: request.query.Genre });
    response.json(purpose);
  } catch (er) {
    console.log(er);
    response.status(500).send("error");
  }
});

// Sorting
my_books_router.get("/sort", async (request, response) => {
  try {
    const purpose = await my_books_model.find({ Genre: request.query.Genre });
    response.json(purpose);
  } catch (er) {
    console.log(er);
    response.status(500).send("error");
  }
});


module.exports = { my_books_router };
