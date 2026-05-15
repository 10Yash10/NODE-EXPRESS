const express = require("express");

const app = express();
const PORT = 3000;

app.get("/getelementindex/:str/:index", (req, res, next) => {
  const { str, index } = req.params;
  const stringLength = str.length;
  const idx = Number(index);

  if (!str || !index) {
    const err = new Error("String and Index is required");
    err.statusCode = 400;
    return next(err);
  }

  if (index <= 0 || index > stringLength) {
    const err = new Error("Index out of bound");
    err.statusCode = 400;
    return next(err);
  }

  if (isNaN(index)) {
    const err = new Error("Invalid Index (only numbers are allowed)");
    err.statusCode = 400;
    return next(err);
  }

  return res.status(200).json({
    status: "success",
    output: `The character at index ${idx} in "${str}" is "${str[idx - 1]}"`,
  });
});

// global error handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Error";

  res.status(err.statusCode).json({
    statusCode: err.statusCode,
    error: err.message,
  });
});

app.listen(PORT, () => console.log(`Server running on PORT : ${PORT}`));
