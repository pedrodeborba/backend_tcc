class PatientController {
    constructor(service){
        this.service = service
    }

    async create (req, res){
        const { body } = req
        console.log(body)
        const patient = await this.service.findByEmail(body.email)
        if(!patient){
            return res.status(400).json({details: "paciente já existe"})
        }

        const result = await this.service.create(body)
        return result
    }
}

export { PatientController }