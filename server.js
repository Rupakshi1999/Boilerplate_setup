const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 4000;

app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});

//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/students", (req, res) => {
  const students = [
    { id: 1, firstName: "Rupakshi", lastName: "Aggarwal" },
    { id: 2, firstName: "Captial", lastName: "buttercup" },
    { id: 3, firstName: "Dusty", lastName: "Trail" },
  ];
  res.json(students);
});
