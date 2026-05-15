const mongoLoader = require("./mongoose.js");
const expressLoader = require("./express.js");

module.exports = async (expressApp) => {
  await mongoLoader();
  await expressLoader(expressApp);
};
