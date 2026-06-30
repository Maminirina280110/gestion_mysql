/** @format */

const express = require("express");
const router = express.Router();

const { Register, Login } = require("../Controller/controller.jwt");

router.post("/register", Register);
router.post("/login", Login);

module.exports = router;
