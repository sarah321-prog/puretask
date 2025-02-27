let data = require('./data.json');
const express = require('express');
const app = express();
const fs = require('fs'); 
const path = require('path');
 let students = [
    // { id: 1, name: "Alice Johnson", stage: "Grade 10", age: 15 },
   // { id: 2, name: "Bob Smith", stage: "Grade 11", age: 16 },
   //{ id: 3, name: "Charlie Brown", stage: "Grade 12", age: 17 },
];

fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
    if (err) {
      console.log('Error reading data.json:', err);
    } else {
      students = JSON.parse(data); 
    }
  });

app.get('/', (req, res) => {
    res.send('API is working!');
});
app.get('/students/above-age/:age', (req, res) => {
    const age = parseInt(req.params.age, 10); 
    const result = isAllStudentsAboveAge(age); 
    res.json({ result });
  });
  

  function isAllStudentsAboveAge(age) {
    return students.every(student => student.age > age); 
  }
app.get('/users', (req, res) => {
    const Userdata = data
    res.send(data)
});
app.get('/first', (req, res) => {
    const Userdata = data
    res.send(Userdata[0])
});

app.get('/', (req, res) => {
    const Userdata = data
    res.send(Userdata[0]) 
});

app.get('/getLastStudent',(req,res)=>{
    let students = data;
    return res.send(students[students.length -1]);
});

app.get('/getStudentById/:id',(req,res)=>{
    
    try{
        let students = data;
        let id = parseInt(req.params.id);
        let stu = students.find(student => student.id === id);
    return res.status(200).json(stu); 
    }
    catch{
        return res.json('id not found');
        
    }

}); 

app.get('/getStudentsByStage/:stage', (req, res) => {
    let students = data;
    let stage = req.params.stage;
    let filtered = students.filter(student => student.stage === stage);
    res.json(filtered);
});



app.get('/removeStudentById/:id', (req, res) => {
    let id = parseInt(req.params.id);
    data = data.filter(student => student.id !== id);
    res.json({
         message: "Student removed", 
         students: data
         });
});

app.get('/updateStudentById/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let student = data.find(student => student.id === id);
    if (student) Object.assign(student, req.query); 
    res.json(student || { error: "Student not found" });
});
   


app.get('/getAverageAge', (req, res) => {
    let ages = data.map(s => s.age).filter(age => typeof age === 'number' && !isNaN(age));
    res.json({ averageAge: ages.length ? ages.reduce((sum, a) => sum + a, 0) / ages.length : "No valid ages" });
});

app.get('/getStudentsAboveAge/:age', (req, res) => {
    res.json(data.filter(s => s.age > parseInt(req.params.age)));
});

app.get('/getStudentsBelowAge/:age', (req, res) => {
    res.json(data.filter(s => s.age < parseInt(req.params.age)));
});

app.get('/getStudentByName/:name', (req, res) => {
    res.json(data.find(s => s.name === req.params.name) || { error: "Student not found" });
});

app.get('/sortStudentsByName', (req, res) => {
    res.json([...data].sort((a, b) => a.name.localeCompare(b.name)));
});

app.get('/sortStudentsByAge', (req, res) => {
    res.json([...data].sort((a, b) => a.age - b.age));
});

app.get('/filterStudentsByAge/:age', (req, res) => {
    res.json(data.filter(s => s.age === parseInt(req.params.age)));
});

app.get('/filterStudentsByStage/:stage', (req, res) => {
    res.json(data.filter(s => s.stage === req.params.stage));
});

app.get('/countStudents', (req, res) => {
    res.json({ count: data.length });
});

app.get('/countStudentsByStage/:stage', (req, res) => {
    res.json({ count: data.filter(s => s.stage === req.params.stage).length });
});

app.get('/incrementStudentAgeById/:id', (req, res) => {
    let student = data.find(s => s.id === parseInt(req.params.id));
    if (student) student.age += 1;
    res.json(student || { error: "Student not found" });
});

app.get('/decrementStudentAgeById/:id', (req, res) => {
    let student = data.find(s => s.id === parseInt(req.params.id));
    if (student) student.age -= 1;
    res.json(student || { error: "Student not found" });
});

app.get('/getStudentsWithIdGreaterThan/:id', (req, res) => {
    res.json(data.filter(s => s.id > parseInt(req.params.id)));
});

app.get('/getStudentsWithIdLessThan/:id', (req, res) => {
    res.json(data.filter(s => s.id < parseInt(req.params.id)));
});

app.get('/getStudentsInRangeOfIds/:startId/:endId', (req, res) => {
    res.json(data.filter(s => s.id >= parseInt(req.params.startId) && s.id <= parseInt(req.params.endId)));
});

app.get('/getTotalAgeOfStudents', (req, res) => {
    res.json({ totalAge: data.reduce((sum, s) => sum + s.age, 0) });
});

app.get('/getAverageAgeByStage/:stage', (req, res) => {
    let studentsInStage = data.filter(s => s.stage === req.params.stage);
    let avgAge = studentsInStage.length ? studentsInStage.reduce((sum, s) => sum + s.age, 0) / studentsInStage.length : 0;
    res.json({ averageAge: avgAge });
});

app.get('/getYoungestStudent', (req, res) => {
    res.json(data.reduce((youngest, s) => (s.age < youngest.age ? s : youngest), data[0]));
});

app.get('/getOldestStudent', (req, res) => {
    res.json(data.reduce((oldest, s) => (s.age > oldest.age ? s : oldest), data[0]));
});

app.get('/hasStudentWithName/:name', (req, res) => {
    res.json({ exists: data.some(s => s.name === req.params.name) });
});

app.get('/getNameOfAllStudents', (req, res) => {
    res.json(data.map(s => s.name));
});

app.get('/getAllStudentIds', (req, res) => {
    res.json(data.map(s => s.id));
});

app.get('/getAllStudentStages', (req, res) => {
    res.json([...new Set(data.map(s => s.stage))]);
});

app.get('/getStudentsWithNamesStartingWith/:letter', (req, res) => {
    res.json(data.filter(s => s.name.startsWith(req.params.letter)));
});

app.get('/getStudentsWithNamesEndingWith/:letter', (req, res) => {
    res.json(data.filter(s => s.name.endsWith(req.params.letter)));
});



app.get('/getAllStudentsSortedById', (req, res) => {
    res.json([...data].sort((a, b) => a.id - b.id));
});

app.get('/reverseStudentList', (req, res) => {
    res.json([...data].reverse());
});

app.get('/getRandomStudent', (req, res) => {
    res.json(data[Math.floor(Math.random() * data.length)]);
});

app.get('/removeStudentsAboveAge/:age', (req, res) => {
    data = data.filter(s => s.age <= parseInt(req.params.age));
    res.json(data);
});

app.get('/removeStudentsBelowAge/:age', (req, res) => {
    data = data.filter(s => s.age >= parseInt(req.params.age));
    res.json(data);
});

app.get('/getStudentsBetweenAges/:minAge/:maxAge', (req, res) => {
    res.json(data.filter(s => s.age >= parseInt(req.params.minAge) && s.age <= parseInt(req.params.maxAge)));
});

app.get('/addMultipleStudents', (req, res) => {
    try {
        const newStudents = JSON.parse(req.query.newStudents); // تحويل الـ query إلى JSON
        students.push(...newStudents);
        res.json({ message: "Students added", students });
    } catch (error) {
        res.status(400).json({ message: "Invalid JSON format", error: error.message });
    }
});

app.get('/removeMultipleStudentsById', (req, res) => {
    const ids = req.query.ids.split(',').map(id => parseInt(id));
    students = students.filter(student => !ids.includes(student.id));
    res.json({ message: "Students removed", students });
});

app.get('/updateMultipleStudentsById', (req, res) => {
    const ids = req.query.ids.split(',').map(id => parseInt(id));
    const updatedData = {
        stage: req.query.stage,
        age: parseInt(req.query.age)
    };
    students.forEach(student => {
        if (ids.includes(student.id)) {
            Object.assign(student, updatedData);
        }
    });
    res.json({ message: "Students updated", students });
});

app.get('/isAllStudentsAboveAge', (req, res) => {
    const age = parseInt(req.query.age);
    const result = isAllStudentsAboveAge(age);
    res.json({ result });
});

console.log(data)
app.get('/isAllStudentsBelowAge/:age', (req, res) => {
    const age = parseInt(req.params.age);
    return res.send(students.every(student => student.age < age));
});

app.get('/hasStudentsInStage', (req, res) => {
    const stage = req.query.stage;

    const result = students.some(student => student.stage === stage);

    
    return res.json({ result });
});

app.get('/getStudentNamesWithIds', (req, res) => {
    const ids = req.query.ids?.split(',').map(Number) || [];
    ids.length ? res.json({ result: getStudentNamesWithIds(ids) }) : res.status(400).json({ error: 'معامل ids غير موجود أو فارغ' });
});

 


  

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

