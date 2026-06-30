/** @format */

const ControllerEDT = require("../Controller/controller.edt");

const express = require("express");
const router = express.Router();

router.get("/edt", ControllerEDT.AfficherEDT);
router.get("/edt/:id", ControllerEDT.AfficherEDTById);
router.post("/addEdt", ControllerEDT.AjouterEdt);

module.exports = router;
