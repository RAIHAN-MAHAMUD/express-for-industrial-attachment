exports.roleManage = (req, res, next) => {
    const token = req.body.token;
    if (token.role == 'admin') {
        next();
    } else {
        if (req.method == 'DELETE') {
            res.send("You are not valid for this operation");
        } else {
            next();
        }
    }
}