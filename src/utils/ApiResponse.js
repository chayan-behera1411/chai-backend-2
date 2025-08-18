class ApiResponse{
    constructor(statusCode,data,message="Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400 // less than 400 are for responses/redirection messages
        //400 - 499 -> client error messages
        //500 - 599 -> server error messages
        // http response status codes
    }
}