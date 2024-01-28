import ERRORS from "../helpers/errros.js";



export const findError = (code) => {
    return ERRORS.filter((err) => err.code == code);
};

