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
    async findByEmail(id){
        return this.model.findOne(id)
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