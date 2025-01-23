"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keyChecker_1 = require("../helpers/keyChecker");
const errorClass_1 = require("../utils/errorClass");
exports.default = {
    register: (req, res, next) => {
        const body = req.body;
        const result = (0, keyChecker_1.keyChecker)(body, ["userName", "password", "nDni", "name", "birthdate", "email"]);
        if (!result) {
            throw new errorClass_1.CustomError(400, `Required field missing or incorrect`);
        }
        next();
    },
    login: (req, res, next) => {
        const body = req.body;
        const result = (0, keyChecker_1.keyChecker)(body, ["userName", "password"]);
        if (!result) {
            throw new errorClass_1.CustomError(400, `Required field missing or incorrect`);
        }
        next();
    },
    createAppointment: (req, res, next) => {
        const body = req.body;
        const result = (0, keyChecker_1.keyChecker)(body, ["date", "time", "userid"]);
        if (!result) {
            throw new errorClass_1.CustomError(400, `Required field missing or incorrect`);
        }
        next();
    }
};
