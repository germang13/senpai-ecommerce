const express = require("express");
const router = express.Router();
const postValidator = require("../validators/users/users-post.validators");
const runValidation = require("../validators");
const {
  createUser,
  getUser,
  getAllUsers,
} = require("../controllers/users.controller");

router.get("/", getAllUsers);

router.get("/:id", getUser);

router.post("/", postValidator, runValidation, createUser);

router.put("/:id");

router.delete("/:id");

module.exports = router;
