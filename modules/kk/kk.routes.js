const express = require("express");
const createKK = require("./controllers/createKK");
const getKK = require("./controllers/getKK");
const auth = require("../../middleware/auth");
const deleteKK = require("./controllers/deleteKK");
const updateKK = require("./controllers/updateKK");
const kkRoutes = express.Router();

// controllers

kkRoutes.use(auth);
kkRoutes.post("/create", createKK);
kkRoutes.get("/get", getKK);
kkRoutes.delete("/delete", deleteKK);
kkRoutes.patch("/update", updateKK);

// userRoutes.get("/dashboard", userDashboard);

module.exports = kkRoutes;
