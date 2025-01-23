import CredentialDto from "../dto/crecrentialDto";
import { Credential } from "../entities/Credential";
import { CredentialRepository } from "../Repositories/AppointmentRepository";
import user_service from "./user_service";
import { User } from "../entities/User";

export default {

create_credential:  async (credentialData: CredentialDto): Promise<Credential> => {
    const { userName, password } = credentialData;
    const new_credential = await CredentialRepository.create({ userName, password })
    await CredentialRepository.save(new_credential)
    return new_credential
},

    login: async(userData:CredentialDto): Promise<User | undefined | null> => {
        const {userName, password} = userData
        const login_credential = await CredentialRepository.findOneBy({userName, password});
        if(login_credential) {
            const login_user = await user_service.get_by_credential(login_credential)
            return login_user
        }
}

}
