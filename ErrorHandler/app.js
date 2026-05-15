const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/squarenumber/:num", (req, res, next) => {
  let x = req.params.num;
  if (isNaN(x)) {
    const err = new Error("Invalid Input");
    err.statusCode = 400;
    err.message = "Input is not a number";
    next(err);
  } else {
    res.json({ "Square: ": x * x });
  }
});

// Global error handling
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "Error";

  // console.log(err.stack);

  res.status(err.statusCode).json({
    statusCode: err.statusCode,
    message: err.message,
  });
});

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
