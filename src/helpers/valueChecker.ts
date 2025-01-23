import { CustomError } from "../utils/errorClass";
import regex from "./regexValidations"

type RegexKeys = keyof typeof regex


export const valueChecker = (body: Record<string, string | number>) => {
    for (const key in body) {
        const value = body[key].toString();
        const isValid = regex[key as RegexKeys]?.test(value);

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

