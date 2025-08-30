import express from "express";
import { generateCode } from "../controllers/aicontroller.js";

const router = express.Router();

router.post("/generate", generateCode);

export default router;