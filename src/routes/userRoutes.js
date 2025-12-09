import express from "express";
import { registerUser, loginUser, getUserProfile } from "../controllers/UserController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUserProfile);

export default router;
