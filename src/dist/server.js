"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const errorHandler_1 = require("./utils/errorHandler");
const server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use((0, morgan_1.default)("dev"));
server.use(express_1.default.json());
server.use(routes_1.default);
server.use(errorHandler_1.errorHandler);
exports.default = server;
