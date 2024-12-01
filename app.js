require("express-async-errors");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URL, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
const ErrorHandler = require("./handlers/errorHandler");
const userRoutes = require("./modules/users/users.routes");
const kkRoutes = require("./modules/kk/kk.routes");
const app = express();
// Models
require("./models/user.model");
require("./models/kk.model");
require("./models/warga.model");
app.use(express.json());
//  routes
app.use(ErrorHandler);
app.use("/api/users", userRoutes);
app.use("/api/kk", kkRoutes);

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
