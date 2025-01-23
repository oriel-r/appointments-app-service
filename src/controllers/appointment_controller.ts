import { Request, Response } from "express";
import catch_async from "../utils/catch_async";
import appointmentService from "../services/appointmentService";
import user_service from "../services/user_service";
import AppointmentDto from "../dto/appointmentDto";

const get_all = async(req: Request, res: Response) => {
    const appointments = await appointmentService.get_all();
    res.status(200).json(appointments); 
    }

const get_appointment = async(req: Request, res: Response) => {
    const appointmentId:string = req.params.id;
    const appointment = await appointmentService.get_by_id(appointmentId);
    res.status(200).json(appointment);
};

const create_appointment = async(req: Request, res: Response) => {
    const appointmentData: AppointmentDto = req.body
    const new_appointment = await appointmentService.create(appointmentData)
    res.status(201).send(new_appointment);
};

const cancel_appointment = async(req: Request, res: Response) => {
    const id:string = req.params.id;
    const appointment_cancel = await appointmentService.cancel(id)
    res.status(200).json(appointment_cancel);
    }


export default {
    get_appointment: catch_async(get_appointment),
    create_appointment: catch_async(create_appointment),
    cancel_appointment: catch_async(cancel_appointment),
    get_all: catch_async(get_all)
}