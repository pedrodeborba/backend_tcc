class ScheduleService {
    constructor(scheduleRepository, patientRepository){
        this.scheduleRepository = scheduleRepository
        this.patientRepository = patientRepository
    }

    async create(data, patientId) {
        // Verificando se o horário já está ocupado
        const existingSchedule = await this.scheduleRepository.findByTime(data.time);
        if (existingSchedule) {
            throw new Error('Horário já está ocupado');
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