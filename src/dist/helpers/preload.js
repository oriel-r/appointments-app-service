"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preloadData = void 0;
const data_source_1 = require("../config/data-source");
const User_1 = require("../entities/User");
const mocks_1 = require("./mocks");
const Appointment_1 = require("../entities/Appointment");
const preloadData = () => __awaiter(void 0, void 0, void 0, function* () {
    const queryRunner = data_source_1.AppDataSource.createQueryRunner();
    yield queryRunner.connect();
    const users = yield queryRunner.manager.find(User_1.User);
    if (users.length === 0) {
        try {
            yield queryRunner.startTransaction();
            for (const user of mocks_1.usersMock) {
                const newUser = queryRunner.manager.create(User_1.User, user);
                yield queryRunner.manager.save(newUser);
            }
            for (const appointment of mocks_1.appointmentsMock) {
                const newAppointment = queryRunner.manager.create(Appointment_1.Appointment, appointment);
                yield queryRunner.manager.save(newAppointment);
            }
            yield queryRunner.commitTransaction();
            console.log("Database was empty, test data is prealoaded");
        }
        catch (error) {
            console.log(error);
            yield queryRunner.rollbackTransaction();
        }
        finally {
            yield queryRunner.release();
        }
    }
    else {
        console.log("Database is already prealoaded");
    }
});
exports.preloadData = preloadData;
