import express from "express";
import multer from "multer";

import { createGroupChat, getGroupChats } from "./Groupchat.controller.js";
import { protectRoute } from "../../middleware/auth.middleware.js";


const router = express.Router();

router.post("/create-group", protectRoute, createGroupChat);
router.get("/allgroup", getGroupChats);

export default router;