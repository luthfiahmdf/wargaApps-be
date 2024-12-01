const express = require("express");
const register = require("./controllers/register");
const login = require("./controllers/login");
const auth = require("../../middleware/auth");
const userRoutes = express.Router();

// controllers
userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.use(auth);
// userRoutes.get("/dashboard", userDashboard);

module.exports = userRoutes;
