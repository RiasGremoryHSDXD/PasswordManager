const student_info = [
    {name:"James Christopher C. Tagupa", age: 20, course: "BSIT", year: 2},
    {name:"John Doe", age: 21, course: "BSIT", year: 2},
    {name:"Jane Doe", age: 22, course: "BSIT", year: 2},
    {name:"Juan Dela Cruz", age: 23, course: "BSIT", year: 2},
    {name:"Maria Clara", age: 24, course: "BSIT", year: 2},
    {name:"Pedro Penduko", age: 25, course: "BSIT", year: 2},
]

student_info.push({name:"zzi", age: 26, course: "BSIT", year: 2})

student_info.forEach((student) => {
    console.log(student.name)
})