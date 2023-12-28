import Topic from "../models/Topic.js";

export const createTopic = async (req, res, next) => {
	const newTopic = new Topic(req.body);

	try {
		const savedTopic = await newTopic.save();
		res.status(200).json(savedTopic);
	} catch (err) {
		next(err);
	}
};

export const getTopic = async (req, res, next) => {
	try {
		const topic = await Topic.findById(req.params.id);
		res.status(200).json(topic);
	} catch (err) {
		next(err);
	}
};

export const getTopics = async (req, res, next) => {
	const { min, max, ...others } = req.query;
	try {
		const topics = await Topic.find();
		res.status(200).json(topics);
	} catch (err) {
		next(err);
	}
};
