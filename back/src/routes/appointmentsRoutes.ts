import { Router } from "express";
import { getAppointments, getAppointmentById, createAppointment, deleteAppointment } from "../controllers/appointmentController";

const appointmentRouter = Router();

appointmentRouter.get('/', getAppointments);

appointmentRouter.get('/:appointmentID', getAppointmentById);

appointmentRouter.post('/schedule', createAppointment);

appointmentRouter.put('/cancel', deleteAppointment);

export default appointmentRouter;