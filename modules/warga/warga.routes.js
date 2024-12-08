const expres = require("express");
const createWarga = require("./controllers/createWarga");
const getWarga = require("./controllers/getWarga");
const auth = require("../../middleware/auth");
const deleteWarga = require("./controllers/deleteWarga");
const updateWarga = require("./controllers/updateWarga");
const wargaRoutes = expres.Router();
// controllers
wargaRoutes.use(auth);
wargaRoutes.post("/create", createWarga);
wargaRoutes.get("/get", getWarga);
wargaRoutes.delete("/delete", deleteWarga);
wargaRoutes.patch("/update", updateWarga);
module.exports = wargaRoutes;
