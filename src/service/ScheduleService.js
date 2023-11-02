class ScheduleService {
    constructor(scheduleRepository, patientRepository){
        this.scheduleRepository = scheduleRepository
        this.patientRepository = patientRepository
    }

    async create(data, patientId) {
        const { time, day, month, year } = data;

        const newTime = time + ' / ' + day + ' / ' + month + ' / ' + year;
        data={...data, time:newTime}

        const schedule = await this.scheduleRepository.findByTime(newTime);

        if (schedule) {
            const errorMessage = 'Já existe esse horário marcado no mesmo dia';
            throw { status: 400, message: errorMessage, error: errorMessage };
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