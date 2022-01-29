// That means while null represents an empty value (but still a value), undefined represents the total absence of a value. 

// # null is set
// =============
let name = null;
console.log(name)

// # undefined
// ===========
let name;
console.log(name);

let obj = { greeting: 'hello world' };
console.log(obj.doesNotExist);

// # check if null or undefined
// ============================
let amount = null;

if (amount == null || amount == undefined) {
  console.log('I am null or undefined');
}

// # checking for null or undefined
// # nullish operator
// ===================
let amount = null;
amount ?? 'no value given';

// # further reading
// =================
// https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript