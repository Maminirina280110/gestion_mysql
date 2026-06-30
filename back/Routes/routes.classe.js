/** @format */

const express = require("express");
const router = express.Router();

const ControllerClasses = require("../Controller/controller.classe");

router.get("/classe", ControllerClasses.AfficherClasses);
router.get("/classe/:id", ControllerClasses.AfficherClassesById);
router.post("/addclasse", ControllerClasses.AjouterClasses);
router.put("/updateclasse/:id", ControllerClasses.ModifierClasses);
router.delete("/deleteclasse/:id", ControllerClasses.DeleteClasses);

module.exports = router;
