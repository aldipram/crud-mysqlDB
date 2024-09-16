const logRequest = (req, res, next) => {
    console.log("request masuk di path:", req.path);
    next();
}

module.exports = logRequest;