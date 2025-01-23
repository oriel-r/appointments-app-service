"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user_controller"));
const keyCheckerMiddleware_1 = __importDefault(require("./../middlewares/keyCheckerMiddleware"));
const valueCheckerMiddleware_1 = require("../middlewares/valueCheckerMiddleware");
const users_router = (0, express_1.Router)();
users_router.get("/:id", user_controller_1.default.get_user_by_id);
users_router.get("/", user_controller_1.default.get_users);
users_router.post("/register", keyCheckerMiddleware_1.default.register, valueCheckerMiddleware_1.valuesForServiceChecker, user_controller_1.default.create_user);
users_router.post("/login", keyCheckerMiddleware_1.default.login, valueCheckerMiddleware_1.valuesForServiceChecker, user_controller_1.default.login_user);
exports.default = users_router;
