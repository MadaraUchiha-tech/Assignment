import updatenote from "../controllers/updatenote.js";

import express from "express";
const router=express.Router();
router.patch('/notes/:id',updatenote);
export default router;