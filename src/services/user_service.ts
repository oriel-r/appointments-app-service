import CredentialDto from "../dto/crecrentialDto";
import UserDto from "../dto/user_dto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { UserRepository } from "../Repositories/UserRepository";
import { CustomError } from "../utils/errorClass";

export default {

    create_user: async (userdata: UserDto):Promise<User> => {
        const new_user = await UserRepository.create(userdata);
        await UserRepository.save(new_user);
        return new_user;
    },

    get_all: async():Promise<User[]> => {
        const users = await UserRepository.find({ relations: { credential: true}});
        if(users.length === 0) throw new CustomError(404, "No se encontraron usuarios")
        return users;
    },

    get_by_id: async(id:string):Promise<User | null | undefined> => {
        const userId = Number(id);
        const user = await UserRepository.findOne({
            where: {id: userId}, 
            relations:{appointments:true}});
        if(!user) throw new CustomError(404, "Usuario inexistente")    
        return user;
        },
    
    get_by_credential: async(credentialData:Credential):Promise<User | null> => {
        const user = await UserRepository.findOne({where: {credential:credentialData}})
        return user
    }
}
    

