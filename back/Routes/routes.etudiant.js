/** @format */

const ControllerEtudiant = require("../Controller/controller.etudiant");

const express = require("express");
const router = express.Router();

router.get("/etudiant", ControllerEtudiant.AfficherEtudiant);
router.get("/etudiant/:id", ControllerEtudiant.AfficherEtudiantById);
router.post("/addEtudiant", ControllerEtudiant.AjouterEtudiant);
router.delete("/deleteEtudiant/:id", ControllerEtudiant.DeleteEtudiant);

module.exports = router;
