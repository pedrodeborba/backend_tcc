class PatientController {
    constructor(service){
        this.service = service
    }

    async create(req, res) {
        const { body } = req;
    
        // Verificando se o paciente já existe pelo email
        const existingPatient = await this.service.findByEmail(body.email);
    
        if (existingPatient) {
            return res.status(400).json({ details: "Paciente já existe" });
        }
    
        // Criando o paciente caso não exista
        const result = await this.service.create(body);
        return res.status(201).json(result);
    }
    
}

export { PatientController }