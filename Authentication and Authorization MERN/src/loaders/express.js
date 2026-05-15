const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const routes = require("../api/routes");

module.exports = (app) => {
  // health + security
  app.get("/status", (req, res) => res.status(200).end());
  app.head("/status", (req, res) => res.status(200).end());

  // middlewares
  app.use(helmet());
  app.use(cors());
  app.use(compression());
  app.use(express.json());
  app.use(morgan("dev"));

  // Routes
  app.use("/api/auth", routes.AuthRoutes);
  app.use("/api/products", routes.ProductRoutes);

  // global 404 error handler
  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next();
  });

  // global error handler
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      error: { message: err.message },
    });
  });
};
