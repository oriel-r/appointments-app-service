"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catch_async = (fn) => {
    return (req, res, next) => {
        fn(req, res).catch((err) => next(err));
    };
};
exports.default = catch_async;
