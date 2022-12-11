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
exports.findAll = (req, res) => {
    res.send(students);
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
exports.createStudent = (req, res) => {
    const student = req.body;
    students.push(student);
    res.send(students);
}