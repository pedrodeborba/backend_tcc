class ScheduleRepository{
    constructor(model){
        this.model = model
    }

    async create(data) {
        return await this.model.create(data);
    }
    async findByDateAndTime(dateString, time) {
        return await this.model.findOne({ dateString, time });
    }
    async findById(id) {
        return await this.model.findById(id);
    }
    async findByTime(time) {
        return this.model.findOne({ time });
    }
}

export { ScheduleRepository }