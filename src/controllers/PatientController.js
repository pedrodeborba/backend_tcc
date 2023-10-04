import bcrypt from "bcrypt";
import { Patient } from "../entitites/Patient.js";

class PatientController {
  constructor(service) {
    this.service = service;
  }

  async authenticatePatient(req, res) {
    const { email, password } = req.body;

    try {
      const patient = await Patient.findOne({ email });

      if (!patient) {
        return res.status(401).json({ message: "Email inválido" });
      }
      if (!bcrypt.compareSync(password, patient.password)) {
        return res.status(401).json({ message: "Senha inválida" });
      }

      res.status(200).json({ message: 'Login bem-sucedido', patientId: patient._id });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao fazer login" });
    }
  }
}

export { PatientController };