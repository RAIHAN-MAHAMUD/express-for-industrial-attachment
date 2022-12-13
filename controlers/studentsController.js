const StudentTable = require('../models/Student')

let students = [
    {
        id: 1,
        name: "John",
        age: 20,
        marks: {
            science: 70,
            math: 75,
        },
    },
    {
        id: 2,
        name: "Tom",
        age: 15,
        marks: {
            science: 80,
            math: 85,
        },
    },
    {
        id: 3,
        name: "Jerry",
        age: 15,
        marks: {
            science: 90,
            math: 95,
        },
    }
];


// GET 
exports.findAll = async (req, res) => {
    // res.send(students);
    res.send(await StudentTable.find());
}

exports.findById = (req, res) => {
    const id = req.params.id;
    let index = students.findIndex(s => s.id == id);
    res.send(students[index]);
}

exports.findByName = (req, res) => {
    const name = req.body.name;
    let index = students.findIndex(s => s.name == name);
    res.send(students[index]);
}


// POST
exports.createStudent = async (req, res) => {
    // const student = req.body;
    // students.push(student);
    // const student = new StudentTable({
    //     id: req.body.id,
    //     name: req.body.name,
    //     age: req.body.age
    // });
    const student = new StudentTable(req.body);
    await student.save();
    res.send(student);
}