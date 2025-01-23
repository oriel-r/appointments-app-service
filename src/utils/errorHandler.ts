import { NextFunction, Request, Response } from "express";
import { CustomError } from "./errorClass";

export const errorHandler = (err:CustomError, req:Request, res:Response, next:NextFunction) => {
    res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || "Internal server error"
    })
}