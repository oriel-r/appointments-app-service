import AppointmentDto, { AppointmetStatus } from "../dto/appointmentDto";
import { Appointment } from "../entities/Appointment";
import { AppointmentModel } from "../config/data-source"
import { User } from "../entities/User";
import user_service from "./user_service";
import { AppointmentRepository } from "../Repositories/CredentialRepository";

export default {
    create: async (appointmentData:AppointmentDto): Promise<Appointment | undefined> => {
        const {userid, date, time} = appointmentData
        const user = await user_service.get_by_id(userid)
        if(user) {
        const new_appointment = await AppointmentModel.create({user, date, time});
        await AppointmentModel.save(new_appointment);
        return new_appointment;
        }
    },

    get_all: async():Promise<Appointment[]> => {
        return await AppointmentModel.find({relations: {user: true}})
    },

    get_by_id: async (data:string):Promise<Appointment | null> => {
        const id = Number(data)
        const appointment = await AppointmentRepository.findOne({where:{id}, relations:{user:true}})
        return appointment
    },

    cancel: async (data: string): Promise<Appointment | undefined> => {
        const id = Number(data)
        const appointment = await AppointmentModel.findOneBy({id});
        if(appointment && appointment.status !== "cancel") {
            appointment.status = AppointmetStatus.CANCEL;
            await AppointmentModel.save(appointment)
            return appointment;
        }
    }
}