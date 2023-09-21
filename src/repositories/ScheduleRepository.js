class ScheduleRepository{
    constructor(model){
        this.model = model
    }

    async create(data){
        return this.model.create(data)
    }

    async findById(id){
        return this.model.findById(id)
    }
    
}

export { ScheduleRepository }