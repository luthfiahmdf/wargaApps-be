const express = require("express");
const dashboardCard = require("./controllers/dashboardCard");
const auth = require("../../middleware/auth");
const dashboardRoutes = express.Router();

dashboardRoutes.use(auth);
dashboardRoutes.get("/card", dashboardCard);
module.exports = dashboardRoutes;
