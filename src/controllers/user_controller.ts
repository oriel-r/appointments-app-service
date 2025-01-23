import { Request, Response } from "express";
import catch_async from "../utils/catch_async";
import user_service from "../services/user_service";
import IUser from "../interfaces/IUser";
import credentialService from "../services/credentialService";
import { User } from "../entities/User";

const create_user = async(req:Request, res:Response) => {
        const {userName, name, password, email, nDni, birthdate} = req.body;
        const credential = await credentialService.create_credential({userName, password})
        const new_user: User = await user_service.create_user({name, email, birthdate, credential, nDni});
        res.status(201).json(new_user); 
    }

const login_user = async(req: Request, res: Response) => {
    const {userName, password} = req.body;
    const user = await credentialService.login({userName, password});
    res.status(200).json({"login": true, user});
}

const get_users = async (req:Request, res:Response) => {
        const users: User[] = await user_service.get_all();
        res.status(200).json(users);
    }

const get_user_by_id = async(req: Request, res: Response) => {
    const user_id = req.params.id;
    const user = await user_service.get_by_id(user_id)
    res.status(200).json(user);
};

export default {  
    create_user: catch_async(create_user),
    login_user: catch_async(login_user),
    get_users: catch_async(get_users),
    get_user_by_id: catch_async(get_user_by_id)
}