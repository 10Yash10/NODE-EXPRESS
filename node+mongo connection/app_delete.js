const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Employee = require("./employee");

const uri = "mongodb://localhost:27017/";

const conn = mongoose.connect(uri, { dbName: "employeeDB" });

conn
  .then(() => {
    console.log("Database connected successfully");

    return Employee.deleteOne({ emp_name: "Yash Sharma" });
  })
  .then((deleteOneData) => {
    console.log("Delete one employee", deleteOneData);

    return Employee.deleteMany({ age: { $gt: 24 } });
  })
  .then((deleteManyData) => {
    console.log("Deleted Many Employee", deleteManyData);

    return Employee.find();
  })
  .then((d) => console.log(d))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
