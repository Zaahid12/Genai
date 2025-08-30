import express from "express";
import { generateCode } from "../controllers/aicontroller.js";

const router = express.Router();

router.post("/generate", generateCode);

res.json({success : true, code: "<h1>test</h1>})

export default router;
