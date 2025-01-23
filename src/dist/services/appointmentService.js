"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appointmentDto_1 = require("../dto/appointmentDto");
const data_source_1 = require("../config/data-source");
const user_service_1 = __importDefault(require("./user_service"));
const CredentialRepository_1 = require("../Repositories/CredentialRepository");
exports.default = {
    create: (appointmentData) => __awaiter(void 0, void 0, void 0, function* () {
        const { userid, date, time } = appointmentData;
        const user = yield user_service_1.default.get_by_id(userid);
        if (user) {
            const new_appointment = yield data_source_1.AppointmentModel.create({ user, date, time });
            yield data_source_1.AppointmentModel.save(new_appointment);
            return new_appointment;
        }
    }),
    get_all: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield data_source_1.AppointmentModel.find({ relations: { user: true } });
    }),
    get_by_id: (data) => __awaiter(void 0, void 0, void 0, function* () {
        const id = Number(data);
        const appointment = yield CredentialRepository_1.AppointmentRepository.findOne({ where: { id }, relations: { user: true } });
        return appointment;
    }),
    cancel: (data) => __awaiter(void 0, void 0, void 0, function* () {
        const id = Number(data);
        const appointment = yield data_source_1.AppointmentModel.findOneBy({ id });
        if (appointment && appointment.status !== "cancel") {
            appointment.status = appointmentDto_1.AppointmetStatus.CANCEL;
            yield data_source_1.AppointmentModel.save(appointment);
            return appointment;
        }
    })
};
