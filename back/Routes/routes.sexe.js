/** @format */

const express = require("express");
const router = express.Router();

const ControllerSexe = require("../Controller/controller.sexe");

router.get("/sexe", ControllerSexe.AfficherSexe);
router.get("/sexe/:id", ControllerSexe.GetSexeById);
router.post("/addsexe", ControllerSexe.AjouterSexe);

module.exports = router;
