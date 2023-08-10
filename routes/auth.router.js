const express = require("express");
const { register, login } = require("../controllers/auth.controller");
const usersPostValidators = require("../validators/users/users-post.validators");
const runValidations = require("../validators");
const router = express.Router();

router.post("/register", usersPostValidators, runValidations, register);

router.post("/login", login);

module.exports = router;
