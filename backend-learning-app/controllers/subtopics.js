import SubTopic from "../models/SubTopic.js";

export const createSubTopic = async (req, res, next) => {
	const newSubTopic = new SubTopic(req.body);

	try {
		const savedSubTopic = await newSubTopic.save();
		res.status(200).json(savedSubTopic);
	} catch (err) {
		next(err);
	}
};

export const getSubTopic = async (req, res, next) => {
	try {
		const subtopic = await SubTopic.findById(req.params._id);
		res.status(200).json(subtopic);
	} catch (err) {
		next(err);
	}
};

export const getSubTopics = async (req, res, next) => {
	const { min, max, ...others } = req.query;
	try {
		const subtopics = await SubTopic.find();
		res.status(200).json(subtopics);
	} catch (err) {
		next(err);
	}
};
