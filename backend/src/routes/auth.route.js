import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.get("/login", (req, res) => {
  res.send("Login endpoint");
});

router.get("/logup", (req, res) => {
  res.send("Logup endpoint");
});

export default router;
