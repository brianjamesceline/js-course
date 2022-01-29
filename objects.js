# creating an object
====================
const student = {
  name: 'Jane',
  lastname: 'Tailor',
  age: 34
}

# retrieve value
================
student['name']

# add / change value
====================
student['name'] = 'Bumi'
console.log(student)

student['subject'] = 'Science'
console.log(student)

# delete value
==============
delete student['subject']
console.log(student)

# check key exists
==================
student.hasOwnProperty('subject')
student.hasOwnProperty('name')

# further reading
=================
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects