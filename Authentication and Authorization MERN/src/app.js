const express = require("express");
const dotenv = require("dotenv");
const loaders = require("./loaders");

dotenv.config();

async function startServer() {
  const app = express();

  await loaders(app);

  const port = process.env.PORT || 5000;
  app.listen(port, (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(`Server running on port : ${port}`);
  });
}

startServer();
