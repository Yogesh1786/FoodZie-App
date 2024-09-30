const express = require("express");
const router = express.Router();
const { Register, Login } = require("../controller/user.controller");

router.post("/signup", Register);
router.post("/login", Login);

module.exports = router;