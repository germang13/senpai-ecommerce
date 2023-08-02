const express = require("express");
const router = express.Router();
const postValidator = require("../validators/users/users-post.validators");
const runValidation = require("../validators");
const { createUser } = require("../controllers/users.controller");

router.get("/");

router.get("/:id");

router.post("/", postValidator, runValidation, createUser);

router.put("/:id");

router.delete("/:id");

module.exports = router;
