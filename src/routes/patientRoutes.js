import { Router } from "express";
import { Patient } from "../entitites/Patient.js";
import { PatientController } from "../controllers/PatientController.js";
import { PatientRepository } from "../repositories/PatientRepository.js";
import { PatientService } from "../service/PatientService.js";

const router = Router();
const patientRepository = new PatientRepository(Patient);
const service = new PatientService(patientRepository);
const controller = new PatientController(service);

router.post("/login", controller.authenticatePatient);

export { router };