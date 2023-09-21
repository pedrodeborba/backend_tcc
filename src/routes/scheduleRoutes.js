import { Router } from "express";
import { Schedule } from "../entitites/Schedules.js"
import { Patient } from "../entitites/Patient.js";
import { ScheduleService } from "../service/ScheduleService.js";
import { SchedulesController } from "../controllers/SchedulesController.js";
import { ScheduleRepository } from "../repositories/ScheduleRepository.js"
import { PatientRepository } from "../repositories/PatientRepository.js";

const router = Router()
const schedulerepository = new ScheduleRepository(Schedule)
const patientRepository = new PatientRepository(Patient)
const service = new ScheduleService(schedulerepository, patientRepository)
const controller = new SchedulesController(service)

router.post("/schedule/:id", controller.create.bind(controller))

export { router}