const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "auth",
    });
    console.log("Connected to Database");
    return connection;
  } catch (err) {
    console.log("Error connecting to database", err);
    process.exit(1);
  }
};
