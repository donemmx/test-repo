const express = require("express");
const User = require("../models/usermodel");
const isLoggedIn = require("../middlewares/isLoggedIn");
const router = express.Router();

const {
    getUsers,
    getUserProfile,
    registerUser,
    loginUser,
    getHealth,
} = require("../controllers/userController");


router.get("/", getUsers);
router.get("/:id", isLoggedIn, getUserProfile);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/health", getHealth);

module.exports = router;