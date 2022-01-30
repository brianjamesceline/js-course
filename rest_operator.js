// # Rest example
// ==============
// When ... appears on the left-hand side of an assignment, those three dots are known as the rest operator.

const [a, b, ...rest] = [0, 1, 1, 2, 3, 5];

// # rest has to be the last item
// ==============================
const [...rest, a, b] = [0, 1, 1, 2, 3, 5];

// # rest works with properties too
// # we have to match the key e.g student
// ======================================
const { student, ...address } = {
  student: 'Adam Peters',
  street: '26 High Street',
  postalCode: 'SE14',
  city: 'London',
};

console.log(student);
console.log(address);

// # Rest Parameter
// ================
function greet(...names) {
  names.forEach(n => {
    console.log(`Hi ${n}`)
  })
}

greet('James', 'Collins', 'Mam');

// # further reading
// =================
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax