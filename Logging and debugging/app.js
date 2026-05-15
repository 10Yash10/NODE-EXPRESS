const express = require("express");
const winston = require("winston");
const loaders = require("./loaders");

async function startServer() {
  const app = express();
  const PORT = 3000;

  debugger;
  await loaders(app);

  app.listen(PORT, () => console.log(`Server running on PORT : ${PORT}`));
}

startServer();
