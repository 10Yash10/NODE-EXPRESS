const mongoose = require("mongoose");
const { MONGO_URL } = require("../constants");

module.exports = () => {
  try {
    mongoose.connect(MONGO_URL, { dbName: "CustomErrorWithMongo" });
  } catch (err) {
    throw new ConnectionError("Unable to connect.");
  }
};
