import { Request, Response } from "express";
import catch_async from "../utils/catch_async";

const get_all = async(req: Request, res: Response) => {
    res.status(200).json({"message":"Se mostrarian todos los turnos"})
}

export default {
    get_all: catch_async(get_all)
}