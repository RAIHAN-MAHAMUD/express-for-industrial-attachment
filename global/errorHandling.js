exports.customErrorMessage = (req, res, next) => {
    const error = new Error('Custom error..!!');
    error.status = 404;
    next();
}

exports.customErrorHandle = (error, req, res, next) => {
    if (error.status) {
        return res.status(error.status).json({
            message: error.message
        });
    }

    res.status(500).json({ message: 'Server Error!!' });
}