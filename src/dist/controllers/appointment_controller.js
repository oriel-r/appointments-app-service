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
const catch_async_1 = __importDefault(require("../utils/catch_async"));
const appointmentService_1 = __importDefault(require("../services/appointmentService"));
const get_all = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield appointmentService_1.default.get_all();
    res.status(200).json(appointments);
});
const get_appointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentId = req.params.id;
    const appointment = yield appointmentService_1.default.get_by_id(appointmentId);
    res.status(200).json(appointment);
});
const create_appointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentData = req.body;
    const new_appointment = yield appointmentService_1.default.create(appointmentData);
    res.status(201).send(new_appointment);
});
const cancel_appointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const appointment_cancel = yield appointmentService_1.default.cancel(id);
    res.status(200).json(appointment_cancel);
});
exports.default = {
    get_appointment: (0, catch_async_1.default)(get_appointment),
    create_appointment: (0, catch_async_1.default)(create_appointment),
    cancel_appointment: (0, catch_async_1.default)(cancel_appointment),
    get_all: (0, catch_async_1.default)(get_all)
};
