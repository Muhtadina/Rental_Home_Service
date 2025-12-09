import AppointmentService from "../services/AppointmentService.js";

export const createAppointment = async (req, res) => {
  try {
    const appointment = await AppointmentService.create(req.body);
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
