import mongoose from "mongoose";


const patientSchema = new mongoose.Schema({
  name: {type: String, required:true},
  email:{type: String, unique:true, required:true},
  password: {type: String, required:true},
  schedules: [{ type: mongoose.Schema.Types.ObjectId, ref: "schedules" }]
})

const Patient = mongoose.model('Patient', patientSchema);

export { Patient }
