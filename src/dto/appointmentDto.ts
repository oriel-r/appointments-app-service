import { User } from "../entities/User"

export enum AppointmetStatus {
    ACTIVE = "active",
    CANCEL = "cancel"
};

interface AppointmentDto {
    date: string,
    time: string,
    userid: string,
};

export default AppointmentDto