import express from "express";
import { createAppointment } from "../controllers/AppointmentController.js";

const router = express.Router();

router.post("/create", createAppointment);

export default router;
