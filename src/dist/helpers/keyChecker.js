"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyChecker = void 0;
const keyChecker = (body, array) => {
    const validKeys = array;
    const hasValidKeys = Object.keys(body).every(key => validKeys.includes(key));
    return hasValidKeys;
};
exports.keyChecker = keyChecker;
