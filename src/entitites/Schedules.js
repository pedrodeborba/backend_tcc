import mongoose from "mongoose";

const schedulesSchema = new mongoose.Schema(
    {
        day: Number,
        month: Number,
        year: Number,
        time: String, 
        patientName: { type: String, ref: 'Patient' },
        patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    },
    { timestamps: true }
);

const Schedule = mongoose.model('Schedule', schedulesSchema);

export { Schedule };
