class PatientRepository{
    constructor(model){
        this.model = model
    }

    async create(data){
        return this.model.create(data)
    }

    async findById(id){
        return this.model.findById(id)
    }
    async findByEmail(email){
        return this.model.findOne({email})
    }

    async pushSchedule(patientId, scheduleId){
        return this.model.findByIdAndUpdate(patientId, {
            $push:{
                schedules:[scheduleId]
            }
        })
    }
}

export { PatientRepository }