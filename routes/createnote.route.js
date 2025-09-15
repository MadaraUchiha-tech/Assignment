import createnote from "../controllers/createnote.js";

import express from "express";
const router=express.Router();
router.post('/notes',createnote);
export default router;