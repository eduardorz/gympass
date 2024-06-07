import { AppointmentModel } from "../config/data-source";
import AppointmentDto from "../dto/AppointmentDto";
import { Appointment } from "../entities/Appointment";



export const getAllAppointmentsService = async () => {
    const appointments: Appointment[] = await AppointmentModel.find();
    return appointments
}

export const getAppointmentByIdService = async (id: number) => {
    const appointmentFinded = await AppointmentModel.findOneBy({id});
    if (!appointmentFinded) throw Error("El turno no existe");
    return appointmentFinded;
}

export const createAppointmentService = async (appointmentData: AppointmentDto) => {
    const newAppointment = await AppointmentModel.create(appointmentData);
    await AppointmentModel.save(newAppointment);
    return newAppointment;
}

export const canceledAppointmentService = async (id: number) => {
    const appointmentFinded = await getAppointmentByIdService(id);
    appointmentFinded.status = "canceled";
    await AppointmentModel.save(appointmentFinded);
    return appointmentFinded;
}

