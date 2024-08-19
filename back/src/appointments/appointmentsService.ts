import { AppointmentModel } from "../config/data-source";
import { Appointment } from "../entities/Appointment";
import AppointmentDto from "./AppointmentDto";


export const getAllAppointmentsService = async () => {
    const appointments: Appointment[] = await AppointmentModel.find();
    if (appointments.length === 0) throw new Error("Por el momento no hay turnos ...");
    return appointments
}

export const getAppointmentByIdService = async (id: number) => {
    const appointmentFinded = await AppointmentModel.findOneBy({id});
    if (!appointmentFinded) throw Error("El turno no existe");
    return appointmentFinded;
}

export const createAppointmentService = async (appointmentData: AppointmentDto) => {
    const newAppointment = AppointmentModel.create(appointmentData);
    await AppointmentModel.save(newAppointment);
    return newAppointment;
}

export const canceledAppointmentService = async (id: number) => {
    const appointmentFinded = await getAppointmentByIdService(id);
    if (!appointmentFinded) throw Error("El turno no existe para ser cancelado ...");
    appointmentFinded.status = "canceled";
    await AppointmentModel.save(appointmentFinded);
    return appointmentFinded;
}

