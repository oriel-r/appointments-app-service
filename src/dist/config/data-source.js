"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialModel = exports.AppointmentModel = exports.UserModel = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Credential_1 = require("../entities/Credential");
const Appointment_1 = require("../entities/Appointment");
const envs_1 = require("./envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: envs_1.DB_USER,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB,
    synchronize: true,
    logging: ["error"],
    entities: [User_1.User, Credential_1.Credential, Appointment_1.Appointment],
    subscribers: [],
    migrations: [],
    dropSchema: true,
});
exports.UserModel = exports.AppDataSource.getRepository(User_1.User);
exports.AppointmentModel = exports.AppDataSource.getRepository(Appointment_1.Appointment);
exports.CredentialModel = exports.AppDataSource.getRepository(Credential_1.Credential);
