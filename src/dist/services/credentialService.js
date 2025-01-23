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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppointmentRepository_1 = require("../Repositories/AppointmentRepository");
const user_service_1 = __importDefault(require("./user_service"));
exports.default = {
    create_credential: (credentialData) => __awaiter(void 0, void 0, void 0, function* () {
        const { userName, password } = credentialData;
        const new_credential = yield AppointmentRepository_1.CredentialRepository.create({ userName, password });
        yield AppointmentRepository_1.CredentialRepository.save(new_credential);
        return new_credential;
    }),
    login: (userData) => __awaiter(void 0, void 0, void 0, function* () {
        const { userName, password } = userData;
        const login_credential = yield AppointmentRepository_1.CredentialRepository.findOneBy({ userName, password });
        if (login_credential) {
            const login_user = yield user_service_1.default.get_by_credential(login_credential);
            return login_user;
        }
    })
};
