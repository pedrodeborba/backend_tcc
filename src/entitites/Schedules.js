import mongoose from "mongoose";

const schedulesSchema = new mongoose.Schema({
    dateString: String,
    day: Number,
    month: Number,
    timestamp: Number,
    year: Number,
    time: String,
}, {timestamps: true});

const Schedule = mongoose.model('Schedule', schedulesSchema);

export { Schedule };
