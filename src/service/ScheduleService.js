class ScheduleService {
    constructor(scheduleRepository, patientRepository){
        this.scheduleRepository = scheduleRepository
        this.patientRepository = patientRepository
    }

    async create(data, patientId) {
        const { dateString, time } = data;
        
        const schedule = await this.scheduleRepository.findByDateAndTime(dateString,time);
        if(dateString && time && schedule){
            throw new Error('Schedule already exists');
        }

        const result = await this.scheduleRepository.create(data);
        await this.patientRepository.pushSchedule(patientId, result._id);
        return result;
   
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