// src/app.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import userRoutes from "./routes/userRoutes.js";
import flatRoutes from "./routes/flats.js";
import negotiationRoutes from "./routes/negotiationRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static frontend files
app.use(express.static(path.join(__dirname, "frontend")));

// ===== FRONTEND PAGES =====
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "login.html"));
});

app.get("/flats", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "flats.html"));
});

// ===== API ROUTES =====
// Prefixing API routes with /api for clarity
app.use("/api/users", userRoutes);
app.use("/api/flats", flatRoutes);
app.use("/api/negotiations", negotiationRoutes);
app.use("/api/appointments", appointmentRoutes);

// ===== SERVER START =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
