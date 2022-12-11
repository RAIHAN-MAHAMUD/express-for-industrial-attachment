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

const e = require('express');
// Map, splice, filter

// let arr = [5, 9, 1, 2, 3, 4, 5, 6];
// function myFilter(arr, cb) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (cb(arr[i])) result.push(arr[i]);
//     }
//     return result;
// }

// function myMap(arr, cb) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(cb(arr[i]));
//     }
//     return result;
// }

// // console.log(myFilter(arr, even));
// console.log(myMap(arr, xyz));
// console.log(myMap(arr, x => x / 3));


// function xyz(num) {
//     return num / 2;
// }

// function even(num) {
//     return num % 2 == 1;
// }

// function odd(num) {
//     return num % 2 == 0;
// }





const express = require('express');
const app = express();
// app.use(express.json());
// app.use(globalLogger);
// app.use(globalValidator);
app.use([express.json(), globalLogger, globalValidator]);

function globalLogger(req, res, next) {
    console.log(`${req.method} is called`);
    next();
}

function globalValidator(req, res, next) {
    const token = req.body.token;
    if (token.role == 'admin') {
        next();
    } else {
        if (req.method == 'PUT') {
            res.send("You are not valid for this operation");
        } else {
            next();
        }

    }
}

app.get('/students', (req, res) => {
    // res.send(students);
    res.status(200).json({
        resutl: true,
        data: students
    });
    console.log(`${req.method} is terminated`);
});

app.get('/students/:id', (req, res) => {
    const id = req.params.id;
    // res.send(students);
    res.status(200).json({
        resutl: true,
        data: students[id - 1]
    });
});

function studentsDataValidatoer(req, res, next) {
    console.log('studentsDataValidatoer is called');
    if (req.body.id && req.body.name) next();
    else res.send('you must enter the id and name');
}


app.post('/students', studentsDataValidatoer, (req, res) => {
    const body = req.body;
    students.push(body);
    res.status(204).json({
        resutl: true,
        data: students
    });
});

app.put('/students', (req, res) => {
    const body = req.body;
    let std_indx = students.findIndex(student => student.id == body.id);
    // students.forEach(student => {
    //     if (student.id == body.id && student.name == body.name) {
    //         student.age = body.age ?? student.age;
    //         student.marks.science = body.marks.science ?? student.marks.science;
    //         student.marks.math = body.marks.math ?? student.marks.math;
    //     }
    // })
    students.splice(std_indx, 1, req.body);
    res.send({
        resutl: true,
        data: students
    });
});

app.patch('/students/:id', (req, res) => {
    const body = req.body;
    // let std_indx = students.findIndex(student => student.id == body.id);
    students.forEach(student => {
        if (student.id == body.params.id && student.name == body.name) {
            student.age = body.age ?? student.age;
            student.marks.science = body.marks.science ?? student.marks.science;
            student.marks.math = body.marks.math ?? student.marks.math;
        }
    })
    // students.splice(std_indx, 1, req.body);
    res.send({
        resutl: true,
        data: students
    });
});


app.delete('/students/:id', (req, res) => {
    let std_indx = students.findIndex(student => student.id == req.params.id);
    students.splice(std_indx, 1);
    res.send({
        resutl: true,
        data: students
    });
});

app.listen(3000, () => {
    console.log('Express is runnig on 3000');
});



