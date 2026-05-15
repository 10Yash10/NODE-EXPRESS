const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Employee = require("./employee");

const uri = "mongodb://localhost:27017/";

mongoose
  .connect(uri, { dbName: "employeeDB" })
  .then(() => {
    console.log("Connected to Database");

    return Employee.updateOne({
      emp_name: "Sparsh",
      email: "sparsh2002@gmail.com",
    });
  })
  .then((updateOneData) => {
    console.log("Updated single data", updateOneData);

    return Employee.updateMany(
      { age: { $gt: 24 } },
      { location: "Araria" },
      { emp_name: "Diksha" },
    );
  })
  .then((updateManyData) => {
    console.log("Update Multiple data: ", updateManyData);

    return Employee.find();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
