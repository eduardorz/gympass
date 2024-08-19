import { Request, Response } from 'express';
import { canceledAppointmentService, createAppointmentService, getAllAppointmentsService, getAppointmentByIdService } from './appointmentsService';
import AppointmentDto from './AppointmentDto';


export const getAppointmentsController = async (req: Request, res: Response) => {
    try {
        const appointments = await getAllAppointmentsService();
        res.status(200).json(appointments); 
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

export const getAppointmentByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointment = await getAppointmentByIdService(Number(id));
        res.status(200).json(appointment);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

export const createAppointmentController = async (req: Request, res: Response) => {
    try {
        const { date, time, description, status }: AppointmentDto = req.body;
        const newAppointment = await createAppointmentService({ date, time, description, status });
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const canceledAppointmentController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedAppointment = await canceledAppointmentService(Number(id));
        res.status(200).json(deletedAppointment);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}
