import express from "express";
import {
	getSubTopic,
	getSubTopics,
	createSubTopic,
} from "../controllers/subtopics.js";

const router = express.Router();

router.post("/", createSubTopic);

router.get("/find/:id", getSubTopic);

router.get("/", getSubTopics);

export default router;
