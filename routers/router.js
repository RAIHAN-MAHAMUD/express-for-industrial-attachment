const { findAll, findById, findByName, createStudent } = require('../controlers/studentsController');
const { findByIdValidator, createStudentValidator } = require('../validators/studentsValidator');
const router = require('express').Router();

router.get('/students', findAll)
router.post('/students')
router.put('/students')
router.delete('/students')

router.get('/teachers')
router.post('/teachers')
router.put('/teachers')
router.delete('/teachers')

router.get('/students/:id', findByIdValidator, findById)
router.post('/students/:id')
router.put('/students/:id')
router.delete('/students/:id')

router.get('/student', findByName)
router.post('/student', createStudentValidator, createStudent)
router.put('/student')
router.delete('/student')

module.exports = router;