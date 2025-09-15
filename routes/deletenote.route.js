import deletenote from "../controllers/deletenote.js";

import express from "express";
const router=express.Router();
router.delete('/notes/:id',deletenote);
export default router;