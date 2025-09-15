import getnotes from "../controllers/getnotes.js";

import express from "express";
const router=express.Router();
router.get('/notes',getnotes);
export default router;