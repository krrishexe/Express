const express = require('express');
require('./db/conn')
const Student = require('./Models/Students');
const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.json())


//VIEW ALL THE STUDENTS
app.get('/' ,async (req, res) =>{
    const result = await Student.find()
    res.send(result)
    console.log(result)
})

//CREATE A NEW STUDENT
app.post('/students' ,async (req, res) => {
    // const addStudent = new Student({
    //     name: req.body.name,
    //     age: req.body.age,
    //     email: req.body.email,
    //     password: req.body.password,
    //     gender: req.body.gender,
    //     address: req.body.address,
    //     reg_no: req.body.reg_no,
    //     class: req.body.class,
    //     phone: req.body.phone
    // })
    //instead of writing the whole request.boy , we can write a single re.body
    try {
        console.log(req.body)
        const addStudent = new Student(req.body)
        const result  = await addStudent.save()
        res.status(201).send(result)
    } catch (error) {
        res.status(400).send(error)
    }

});

app.listen(port,function(){
    console.log(`Server started successfully at http://localhost:${port}/`)
})