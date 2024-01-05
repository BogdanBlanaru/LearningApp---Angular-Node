import mongoose from "mongoose";

const SubTopicSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	category: {
		type: String,
		required: true,
	},
	subcategory: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
		unique: true,
	},
});

export default mongoose.model("SubTopic", SubTopicSchema);
