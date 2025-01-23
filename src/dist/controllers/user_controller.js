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
const catch_async_1 = __importDefault(require("../utils/catch_async"));
const user_service_1 = __importDefault(require("../services/user_service"));
const credentialService_1 = __importDefault(require("../services/credentialService"));
const create_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, name, password, email, nDni, birthdate } = req.body;
    const credential = yield credentialService_1.default.create_credential({ userName, password });
    const new_user = yield user_service_1.default.create_user({ name, email, birthdate, credential, nDni });
    res.status(201).json(new_user);
});
const login_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, password } = req.body;
    const user = yield credentialService_1.default.login({ userName, password });
    res.status(200).json({ "login": true, user });
});
const get_users = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_service_1.default.get_all();
    res.status(200).json(users);
});
const get_user_by_id = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = req.params.id;
    const user = yield user_service_1.default.get_by_id(user_id);
    res.status(200).json(user);
});
exports.default = {
    create_user: (0, catch_async_1.default)(create_user),
    login_user: (0, catch_async_1.default)(login_user),
    get_users: (0, catch_async_1.default)(get_users),
    get_user_by_id: (0, catch_async_1.default)(get_user_by_id)
};
