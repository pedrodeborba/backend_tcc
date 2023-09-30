class PatientService {
    constructor(patientRepository){
        this.patientRepository = patientRepository
    }

    async create (data){
        const result = await this.patientRepository.create(data)
        return result
    }

    async findById(id){
        const patient = await this.patientRepository.findById(id)
        return patient
    }

    async findByEmail({ email }){
        const patient = await this.patientRepository.findByEmail(email)
        return patient
    }
}

export { PatientService }