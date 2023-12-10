import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	subtopic: {
		type: [
			{
				id: {
					type: Number,
					required: true,
				},

				title: {
					type: String,
					required: true,
				},
				description: {
					type: String,
					required: true,
				},
				content: {
					type: String,
					required: true,
				},
			},
		],
		required: true,
	},
});

export default mongoose.model("Topic", TopicSchema);
