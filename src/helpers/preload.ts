import { UserRepository } from "../Repositories/UserRepository";
import { AppDataSource } from "../config/data-source"
import { User } from "../entities/User";
import { usersMock, appointmentsMock } from "./mocks";
import { Appointment } from "../entities/Appointment";

export const preloadData = async () => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();

    const users = await queryRunner.manager.find(User);
    if (users.length === 0) {
    try {

            await queryRunner.startTransaction();

            for (const user of usersMock) {
                const newUser = queryRunner.manager.create(User, user);
                await queryRunner.manager.save(newUser);
            }

            for (const appointment of appointmentsMock) {
                const newAppointment = queryRunner.manager.create(Appointment, appointment);
                await queryRunner.manager.save(newAppointment);
            }

            await queryRunner.commitTransaction(); 
        console.log("Database was empty, test data is prealoaded")
        
    } catch (error) {
        console.log(error)
            await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

} else{
    console.log("Database is already prealoaded")
}

}
    
