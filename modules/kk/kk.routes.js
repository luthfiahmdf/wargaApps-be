const express = require("express");
const createKK = require("./controllers/createKK");
const getKK = require("./controllers/getKK");
const auth = require("../../middleware/auth");
const kkRoutes = express.Router();

// controllers

kkRoutes.use(auth);
kkRoutes.post("/create", createKK);
kkRoutes.get("/get", getKK);

// userRoutes.get("/dashboard", userDashboard);

module.exports = kkRoutes;
