const express = require("express");
const authRoute = require("../api/routes/authRoute");

module.exports = (app) => {
  // health check
  app.get("/", (req, res) => res.status(200).end());

  //   middlewares
  app.use(express.json());

  // route
  app.use("/auth/api", authRoute);

  // global error handler
  app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Error";

    res.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message,
    });
  });
};
