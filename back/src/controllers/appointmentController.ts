import { Request, Response } from 'express';
import { canceledAppointmentService, createAppointmentService, getAllAppointmentsService, getAppointmentByIdService } from '../services/appointmentService';
import AppointmentDto from '../dto/AppointmentDto';


export const getAppointments = async (req: Request, res: Response) => {
    const appointments = await getAllAppointmentsService();
    res.status(200).json(appointments); 
}

export const getAppointmentById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const appointment = await getAppointmentByIdService(Number(id));
    res.status(200).json(appointment);
}


export const createAppointment = async (req: Request, res: Response) => {
    const { date, time, description, status, userId }: AppointmentDto = req.body;
    const newAppointment = await createAppointmentService({ date, time, description, status, userId });
    res.status(201).json(newAppointment);
}


export const deleteAppointment = async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedAppointment = await canceledAppointmentService(Number(id));
    res.status(200).json(deletedAppointment);
}
