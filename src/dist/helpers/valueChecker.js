"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueChecker = void 0;
const regexValidations_1 = __importDefault(require("./regexValidations"));
const valueChecker = (body) => {
    var _a;
    for (const key in body) {
        const value = body[key].toString();
        const isValid = (_a = regexValidations_1.default[key]) === null || _a === void 0 ? void 0 : _a.test(value);
        if (key === "date") {
            const date = new Date(value);
            const day = date.getDay();
            if (isNaN(date.getTime()) || day === 0 || day === 6) {
                return { isValid: false, key };
            }
        }
        if (!isValid) {
            return { isValid: false, key };
        }
    }
    return { isValid: true };
};
exports.valueChecker = valueChecker;
