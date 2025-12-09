import express from "express";
import { createNegotiation, getNegotiationsForFlat } from "../controllers/NegotiationController.js";

const router = express.Router();

router.post("/create", createNegotiation);
router.get("/flat/:flatId", getNegotiationsForFlat);

export default router;
