"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointment_controller_1 = __importDefault(require("../controllers/appointment_controller"));
const keyCheckerMiddleware_1 = __importDefault(require("./../middlewares/keyCheckerMiddleware"));
const valueCheckerMiddleware_1 = require("../middlewares/valueCheckerMiddleware");
const appointments_router = (0, express_1.Router)();
appointments_router.post("/schedule", keyCheckerMiddleware_1.default.createAppointment, valueCheckerMiddleware_1.valuesForServiceChecker, appointment_controller_1.default.create_appointment);
appointments_router.get("/", appointment_controller_1.default.get_all);
appointments_router.get("/:id", appointment_controller_1.default.get_appointment);
appointments_router.put("/cancel/:id", appointment_controller_1.default.cancel_appointment);
exports.default = appointments_router;
