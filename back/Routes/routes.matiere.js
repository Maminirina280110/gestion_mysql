/** @format */

const express = require("express");
const router = express.Router();

const ControllerMatiere = require("../Controller/controller.matiere");

router.get("/matiere", ControllerMatiere.AfficherMatiere);
router.get("/matiere/:id", ControllerMatiere.AfficherMatiereById);
router.post("/addmatiere", ControllerMatiere.AjouterMatiere);
router.put("/updatematiere/:id", ControllerMatiere.UpdateMatiere);
router.delete("/deletematiere/:id", ControllerMatiere.DeleteMatiere);

module.exports = router;
