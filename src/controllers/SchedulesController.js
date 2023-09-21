class SchedulesController {
    constructor(service){
        this.service = service
    }

    async create (req, res){
        const { body, params: { id } } = req

        const patient = await this.service.findPatientById(id)

        if(!patient){
            return res.status(400).json({details: "paciente não existe"})
        }

        const schedule = await this.service.create(body, id)
        
        return schedule
    }
}

export { SchedulesController }