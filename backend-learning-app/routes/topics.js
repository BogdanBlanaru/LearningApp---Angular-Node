import express from "express";
import { getTopic, getTopics, createTopic } from "../controllers/topics.js";

const router = express.Router();

router.post("/", createTopic);

router.get("/find/:id", getTopic);

router.get("/", getTopics);

export default router;
