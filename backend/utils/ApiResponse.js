export class ApiRes {
    constructor(statusCode = 200, data = null, message  = null, success = false) {
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = success
    }
}