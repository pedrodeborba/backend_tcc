class ScheduleService {
    constructor(scheduleRepository, patientRepository){
        this.scheduleRepository = scheduleRepository
        this.patientRepository = patientRepository
    }

    async create (data, id){
        const result = await this.scheduleRepository.create(data)
        await this.patientRepository.pushSchedule(id, result._id)

        return result
    }

    async findById(id){
        const schedule = await this.scheduleRepository.findById(id)
        return schedule
    }

    async findPatientById(id){
        const patient = await this.patientRepository.findById(id)
        return patient
    }
    
}

export { ScheduleService }