const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Employee = require("./employee");

const uri = "mongodb://localhost:27017/";

mongoose
  .connect(uri, { dbName: "employeeDB" })
  .then(() => {
    console.log("Connected to Database.");

    return Employee.insertOne({
      emp_name: "Yash Sharma",
      age: 24,
      location: "Haldwani",
      email: "yashsharma@gmail.com",
    });
  })
  .then((insertOneData) => {
    console.log("Single data inserted into database");

    return Employee.insertMany([
      {
        emp_name: "Sparsh",
        age: 24,
        location: "Haldwani",
        email: "sparsh@gmail.com",
      },
      {
        emp_name: "Diksha",
        age: 25,
        location: "Araria",
        email: "dikshajha@gmail.com",
      },
      {
        emp_name: "Vivek",
        age: 24,
        location: "Muzzafar Nagar",
        email: "vivek@gmail.com",
      },
    ]);
  })
  .then((insertManyData) => {
    console.log("Multiple data inserted into database");

    return Employee.find();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
