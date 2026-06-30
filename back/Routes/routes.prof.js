/** @format */

const express = require("express");
const router = express.Router();

const ControllerProf = require("../Controller/controller.prof");

router.get("/professeur", ControllerProf.AfficherProf);
router.get("/professeur/:id", ControllerProf.AfficherProfById);
router.post("/addProfesseur", ControllerProf.AjouterProf);
router.put("/updateProfesseur/:id", ControllerProf.UpdateProf);

module.exports = router;
