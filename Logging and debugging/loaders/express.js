const winston = require("winston");

module.exports = (app) => {
  const logger = winston.createLogger({
    level: "info",
    // simple() will store entries in simple text file.
    // json() will store entries in json format.
    format: winston.format.json(),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: "logfile.log" }),
    ],
  });

  let cust_details = [
    [
      "John",
      "Kate",
      "Ross",
      "Joseph",
      "Maria",
      "Christina",
      "Jim",
      "Dan",
      "Emma",
      "Elijah",
    ],
    [
      "Doe",
      "Smith",
      "Taylor",
      "Anderson",
      "Martinex",
      "Johnson",
      "Walker",
      "Williams",
      "Turner",
      "Foster",
    ],
    [
      "Miami",
      "Houston",
      "Los Angeles",
      "North Dakota",
      "Chicago",
      "Dallas",
      "Denver",
      "Atlanta",
      "San Francisco",
      "New York",
    ],
  ];

  for (const [index, firstname] of cust_details[0].entries()) {
    const lastname = cust_details[1][index];
    const city = cust_details[2][index];

    logger.info(firstname + " " + lastname + " " + city);
  }

  //  global error hanlder
  app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Error";

    res.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message,
    });
  });
};
