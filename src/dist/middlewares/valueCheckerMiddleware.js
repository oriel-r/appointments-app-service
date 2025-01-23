"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valuesForServiceChecker = void 0;
const valueChecker_1 = require("../helpers/valueChecker");
const errorClass_1 = require("../utils/errorClass");
const valuesForServiceChecker = (req, res, next) => {
    const body = req.body;
    const result = (0, valueChecker_1.valueChecker)(body);
    if (!result.isValid) {
        throw new errorClass_1.CustomError(400, `Value for ${result.key} is invalid`);
    }
    next();
};
exports.valuesForServiceChecker = valuesForServiceChecker;
