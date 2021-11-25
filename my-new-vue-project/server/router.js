const express = require("express");
const router = express.Router();
const { Todos } = require("./dbConnection")

router.get("/calc", function (req, res) {
  const a = 4;
  const b = 4;
  const result = a + b;
  res.send({ result });
});

// request === req ja response === res
router.get("/get-todos", async function (request, response) {
  const result = await Todos.find();
  response.send(result);
});

router.get("/get-todo/:id", async function (request, response) {
  const result = await Todos.findOne({ _id: request.params.id });
  response.send(result);
});

router.post("/add-todo", async function (request, response) {
if(request.body.title) {
  await Todos.create();
console.log("lisa todo")
response.send("done");
});

module.exports = router;
