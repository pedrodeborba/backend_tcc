class SchedulesController {
    constructor(service){
        this.service = service
    }

    async create(req, res) {
        const { body, params: { id } } = req;
    
        try {
            const schedule = await this.service.create(body, id);
            return res.status(201).json(schedule);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    
}

export { SchedulesController }