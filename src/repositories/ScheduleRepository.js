class ScheduleRepository{
    constructor(model){
        this.model = model
    }

    async findByTime(newTime){
        return await this.model.findOne({time:newTime})
    }

    async create(data) {
        return await this.model.create(data);
    }
    async findById(id) {
        return await this.model.findById(id);
    }
}

export { ScheduleRepository }