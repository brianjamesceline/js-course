// # type error
// ============
[].length()

// # syntax error
// ==============
console.log('hello')

// # reference error
// console.log(doesNotExist)

// # manually throwing errors
// ==========================

name = 'kingsley'

if(typeof name !== 'string') {
  throw new Error('name must be a string');
} else {
  console.log(`My name is ${name}`);
}

// # catching errors
// =================
try {
  if (typeof name !== 'string') {
    throw new Error('name must be a string');
  } else {
    console.log(`My name is ${name}`);
  }
} catch (e) {
  console.log(e.message);
}

// # further reading:
// ==================
// https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/error