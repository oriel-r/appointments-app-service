import { NextFunction, Request, Response } from "express";
import { valueChecker } from "../helpers/valueChecker";
import { CustomError } from "../utils/errorClass";

export const valuesForServiceChecker = (req:Request, res:Response, next:NextFunction) => {
    const body = req.body
    const result = valueChecker(body)
    if(!result.isValid) {
        throw new CustomError(400, `Value for ${result.key} is invalid`)
    }
    next()
}