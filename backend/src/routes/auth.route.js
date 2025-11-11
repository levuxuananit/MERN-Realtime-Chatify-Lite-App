import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("Signup endpoint");
});

router.get("/login", (req, res) => {
  res.send("Login endpoint");
});

router.get("/logup", (req, res) => {
  res.send("Logup endpoint");
});

export default router;
