const exp = require("express");

const { my_connect } = require("./configure/database");
require("dotenv").config();
const { my_books_router } = require("./routers/books_router");
const my_cp = require("cors");

const my_application = exp();
my_application.use(my_cp());

my_application.use(exp.json());



my_application.get("/", async (request, response) => {
  response.status(201).send("Landing Page");
});


my_application.use("/books", my_books_router);


my_application.listen(process.env.my_port, async (request, response) => {
  try {
    await my_connect;
    console.log("Connected to the db");
  } 
  catch (er) {
    console.log("Fail to connect to db");
    console.log(er);
  }
  console.log(`${process.env.my_port}`);
});
