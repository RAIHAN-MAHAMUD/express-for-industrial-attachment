const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    marks: {
        science: String,
        math: String
    }
});

module.exports = mongoose.model("StudentTable", studentSchema);