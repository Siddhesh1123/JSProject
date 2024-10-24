const asynchandler = (handler) => {
    (req, res, next) => {
        Promise.resolve(handler(req, res, next)).catch((err) => next(err));
    }
}

export { asynchandler };