// GET
exports.findByIdValidator = (req, res, next) => {
    console.log('findByIdValidator is called');
    if (!req.params.id) res.send('you must enter the id in url');
    else next();
}


// POST
exports.createStudentValidator = (req, res, next) => {
    console.log('studentsDataValidatoer is called');
    if (req.body.id && req.body.name) next();
    else res.send('you must enter the id and name');
}