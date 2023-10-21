import mongoose from "mongoose";

const schedulesSchema = new mongoose.Schema(
    {
        dateString: String,
        day: Number,
        month: Number,
        timestamp: Number,
        year: Number,
        time: { type: String, required: true, unique: true }, 
        patientName: { type: String, required: true, ref: 'Patient' },
        patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    },
    { timestamps: true }
);

const Schedule = mongoose.model('Schedule', schedulesSchema);

export { Schedule };
