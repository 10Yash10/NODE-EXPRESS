const express = require("express");
const loaders = require("./loaders");
const { PORT } = require("./constants");

async function startService() {
  const app = express();

  await loaders(app);

  app.listen(PORT, () => console.log(`Server running on PORT : ${PORT}`));
}

startService();
