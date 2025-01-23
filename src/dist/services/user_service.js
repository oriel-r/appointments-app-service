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
const UserRepository_1 = require("../Repositories/UserRepository");
const errorClass_1 = require("../utils/errorClass");
exports.default = {
    create_user: (userdata) => __awaiter(void 0, void 0, void 0, function* () {
        const new_user = yield UserRepository_1.UserRepository.create(userdata);
        yield UserRepository_1.UserRepository.save(new_user);
        return new_user;
    }),
    get_all: () => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield UserRepository_1.UserRepository.find({ relations: { credential: true } });
        if (users.length === 0)
            throw new errorClass_1.CustomError(404, "No se encontraron usuarios");
        return users;
    }),
    get_by_id: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = Number(id);
        const user = yield UserRepository_1.UserRepository.findOne({
            where: { id: userId },
            relations: { appointments: true }
        });
        if (!user)
            throw new errorClass_1.CustomError(404, "Usuario inexistente");
        return user;
    }),
    get_by_credential: (credentialData) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield UserRepository_1.UserRepository.findOne({ where: { credential: credentialData } });
        return user;
    })
};
