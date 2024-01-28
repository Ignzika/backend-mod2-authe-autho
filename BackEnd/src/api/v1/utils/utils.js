import ERRORS from "../helpers/errors.js";


export const findError = (code) => {
    return ERRORS.filter((err) => err.code == code);
};


// nunca me a agarrado bien esta forma de error handler D: