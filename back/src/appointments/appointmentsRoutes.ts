import { Router } from "express";
import { canceledAppointmentController, createAppointmentController, getAppointmentByIdController, getAppointmentsController } from "./appointmentsController";


const appointmentRouter = Router();

appointmentRouter.get('/', getAppointmentsController);

appointmentRouter.get('/:id', getAppointmentByIdController);

appointmentRouter.post('/schedule', createAppointmentController);

appointmentRouter.put('/cancel/:id', canceledAppointmentController);

export default appointmentRouter;