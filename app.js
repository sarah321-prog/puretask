let students = require("./data.json");
console.log(students);
let getAllStudents = () => {
  return students;
};
console.log(getAllStudents());

let getFirstStudent = () => {
  return students[0];
};
console.log(getFirstStudent());


let getLastStudent = () => {
    return students[students.length -1];
};
console.log(getLastStudent());

let getStudentById = (id) => {
  return students . find(student => student.id=== id); 
};
 console.log(getStudentById(3));


let getStudentsByStage = (stage) => {
  return students.filter(student => student.stage == stage);
};
console.log(getStudentsByStage("9"))


let addStudent = (newStudent) => {
 students.push(newStudent);
};
addStudent ({id: 19, name:"New Student ", stage: "Grede 10", age: 15});
console.log(getAllStudents());


let removeStudentById = (id) => {
  let index = students.findIndex(student => student.id ==id);
  if(index !==-1) students.splice(index, 1);
};
removeStudentById(2);
console.log(getAllStudents());

let updateStudentById = (id, updatedData) => {
let student =students.find(student => student.id == id);
if(student) Object.assign(student, updateStudentById);

};
updateStudentById(3, { name: "Alice Updeated", age: 18});
console.log(getStudentById(3));

let getAverageAge = () => {
  let totalAge = students.reduce((sum, student) => sum +student.age, 0);
  return totalAge / students.length;
};

console.log(getAverageAge());


let getStudentsAboveAge = (age) => {
return students.filter(student => student.age> age);

};
console.log(getStudentsAboveAge(16));

let getStudentsBelowAge = (age) => {
  return students.filter(student => student.age<age);

};

console.log(getStudentsBelowAge(16));


let getStudentByName = (name) => {
  return students.find(student => student.name === name);

};
console.log(getStudentByName("Alice Johndon"));


let sortStudentsByName = () => {
  return students.sort((a, b) => a.name.localeCompare(b.name));

};

console.log(sortStudentsByName());


let sortStudentsByAge = () => {
  return students.sort((a, b) => a.age - b.age);

  
};

console.log(sortStudentsByAge());

let filterStudentsByAge = (age) => {
  
  return students.filter(student => student.age === age);
};

console.log(filterStudentsByAge(16));


let filterStudentsByStage = (stage) => {
  
  return students.filter(student => student.stage === stage);
};

console.log(filterStudentsByStage("Grade 11"));


let countStudents = () => {
  return students.length;

};

console.log(countStudents());

let countStudentsByStage = (stage) => {
  
return students.filter(student => student.stage);

};

console.log(countStudentsByStage("Grade 10"));

let incrementStudentAgeById = (id) => {
  
let student = students.find(student => student.id === id);
  if (student) student.age += 1;
};

incrementStudentAgeById(5);
console.log(getStudentById(5));


let decrementStudentAgeById = (id) => {
  let student = students.find(student => student.id === id);
  if (student) student.age -= 1;
};

decrementStudentAgeById(5);
console.log(getStudentById(5));


let getStudentsWithIdGreaterThan = (id) => {
  
  return students.filter(student => student.id > id);

};
console.log(getStudentsWithIdGreaterThan(10));


let getStudentsWithIdLessThan = (id) => {
  
  return students.filter(student => student.id<id);

};
console.log(getStudentsWithIdLessThan(10));

let getStudentsInRangeOfIds = (startId, endId) => {
  
  return students.filter(student => student.id >= startId && student.id <= endId);

};
console.log(getStudentsInRangeOfIds(5, 15));

let getTotalAgeOfStudents = () => {
  return students.reduce((sum, student) => sum +student.age, 0);

};
console.log(getTotalAgeOfStudents());


let getAverageAgeByStage = (stage) => {
  
  let StudentsInStage = students.filter(student => student.stage);
  let totalAge = StudentsInStage.reduce((sum, student) => sum + student.age, 0);
  return totalAge / StudentsInStage.length;

};
console.log(getAverageAgeByStage("Grade 11"));


let getYoungestStudent = () => {
  return students.reduce((youngest, student) => (student.age < youngest.age ? student : youngest), students [0]);
};
console.log(getYoungestStudent());


let getOldestStudent = () => {
  return students.reduce((oldest, student) => (student.age > oldest.age ? student : oldest) , students[0]);
};
console.log(getOldestStudent());


let hasStudentWithName = (name) => {

    return students.some(student => student.name === name);
};

console.log(hasStudentWithName("Alice Johnson")); // true
console.log(hasStudentWithName("Unknown Name")); // false



let getNameOfAllStudents = () => {

  return students.map(student => student.name);
};

console.log(getNameOfAllStudents());



let getAllStudentIds = () => {
  
  return students.map(student => student.id);
};

console.log(getAllStudentIds());



let getAllStudentStages = () => {
  
  return [...new Set(students.map(student => student.stage))];
};

console.log(getAllStudentStages());



let getStudentsWithNamesStartingWith = (letter) => {
  
 return students.filter(student => student.name.startsWith(letter));

};

console.log(getStudentsWithNamesStartingWith("A"));


let getStudentsWithNamesEndingWith = (letter) => {
  
  return students.filter(student => student.name.endsWith(letter));
};

console.log(getStudentsWithNamesEndingWith("n"));



let getStudentsWithNameLengthGreaterThan = (length) => {
  return students.filter(student => student.name.length > length);
};

console.log(getStudentsWithNameLengthGreaterThan(10));



let getStudentsWithNameLengthLessThan = (length) => {
  
  return students.filter(student => student.name.length < length);
};

console.log(getStudentsWithNameLengthLessThan(10));



let getAllStudentsSortedById = () => {
  
  return [...students].sort((a, b) => a.id - b.id);
};

console.log(getAllStudentsSortedById());



let reverseStudentList = () => {
  
  return students.reverse();
};

console.log(reverseStudentList());



let getRandomStudent = () => {
  
  let randomIndex = Math.floor(Math.random() * students.length);
  return students[randomIndex];
};

console.log(getRandomStudent());


let removeStudentsAboveAge = (age) => {
  
  students = students.filter(student => student.age <= age);
};

removeStudentsAboveAge(16);
console.log(getAllStudents());


let removeStudentsBelowAge = (age) => {
  
  
students = students.filter(student => student.age >= age);
};

removeStudentsBelowAge(15);
console.log(getAllStudents());



let getStudentsBetweenAges = (minAge, maxAge) => {
  
  return students.filter(student => student.age >= minAge && student.age <= maxAge);
};

console.log(getStudentsBetweenAges(14, 16));



let countStudentsAboveAge = (age) => {

  return students.filter(student => student.age > age).length;
};

console.log(countStudentsAboveAge(15));



let countStudentsBelowAge = (age) => {
  
  return students.filter(student => student.age < age).length;
};

console.log(countStudentsBelowAge(15));


let addMultipleStudents = (newStudents) => {
  
  students.push(...newStudents);
};

addMultipleStudents([
  { id: 21, name: "Sara Ali", stage: "Grade 10", age: 15 },
  { id: 22, name: "Omar Ahmed", stage: "Grade 11", age: 16 }
]);

console.log(getAllStudents());



let removeMultipleStudentsById = (ids) => {
  
  students = students.filter(student => !ids.includes(student.id));
};

removeMultipleStudentsById([1, 5, 10]);
console.log(getAllStudents());



let updateMultipleStudentsById = (ids, updatedData) => {
  
  students.forEach(student => {
    if (ids.includes(student.id)) {
      Object.assign(student, updatedData);
    }
  });
};

updateMultipleStudentsById([2, 3], { stage: "Updated Grade", age: 18 });
console.log(getAllStudents());



let isAllStudentsAboveAge = (age) => {
  
  return students.every(student => student.age > age);
};

console.log(isAllStudentsAboveAge(10)); // true
console.log(isAllStudentsAboveAge(18)); // false


let isAllStudentsBelowAge = (age) => {
  
  return students.every(student => student.age < age);
};

console.log(isAllStudentsBelowAge(20)); // true
console.log(isAllStudentsBelowAge(15)); // false


let hasStudentsInStage = (stage) => {

  return students.some(student => student.stage === stage);
};

console.log(hasStudentsInStage("Grade 11")); // true
console.log(hasStudentsInStage("Grade 13")); // false


let getStudentNamesWithIds = (ids) => {
  
  return students.filter(student => ids.includes(student.id)).map(student => student.name);
};

console.log(getStudentNamesWithIds([1, 5, 10]));
