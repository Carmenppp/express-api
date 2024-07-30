export const errorHandler = (message, code) => {
    let err = new Error(message);

    if(code) {
        err.statusCode = code;
    }
    return err;

}