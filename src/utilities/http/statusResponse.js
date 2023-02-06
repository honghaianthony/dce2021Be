class Response {
    constructor(message, statusCode, data = null) {
        this.msg = message;
        this.statusCode = statusCode;

        if (data) {
            this.data = data;
        }
    }
}

module.exports = {
    Response,
};
