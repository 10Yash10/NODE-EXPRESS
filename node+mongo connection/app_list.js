const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Employee = require("./employee");

const uri = "mongodb://localhost:27017/";

mongoose.connect(uri, { dbName: "employeeDB" });

Employee.find()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
