import { NextFunction, Response, Request } from "express";
import { keyChecker } from "../helpers/keyChecker";
import { CustomError } from "../utils/errorClass";

export default {
    register: (req:Request, res:Response, next:NextFunction) => {
        const body = req.body
        const result = keyChecker(body, ["userName", "password", "nDni", "name", "birthdate", "email"])
        if(!result) {
            throw new CustomError(400, `Required field missing or incorrect`)
        }
        next()
    },
    login: (req:Request, res:Response, next:NextFunction) => {
        const body = req.body
        const result = keyChecker(body, ["userName", "password"])
        if(!result) {
            throw new CustomError(400, `Required field missing or incorrect`)
        }
        next()
    },
    createAppointment: (req:Request, res:Response, next:NextFunction) => {
        const body = req.body
        const result = keyChecker(body, ["date", "time", "userid"])
        if(!result) {
            throw new CustomError(400, `Required field missing or incorrect`)
        }
        next()
    }
}