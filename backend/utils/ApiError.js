export class ApiError extends Error {
    constructor(statusCode = 500, message = "Something fishy", success = false, errors = [], stack) {
        super(message);
        this.statusCode = statusCode
        this.success = success
        this.errors = errors
        
        if (stack) {
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}