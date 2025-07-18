export class ApiRes {
    constructor(statusCode = 200, data = null, message  = null) {
        this.statusCode = statusCode
        this.data = data
        this.message = message
    }
}