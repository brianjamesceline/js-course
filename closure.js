// # global scope
// =============
const age = 45;

function doubleAge() {
  return age * 2;
}

console.log(doubleAge());

// # local scope
// ==============
var name = "Tony";

function printName() {
  var name = "Susan";
  return name;
}

console.log(name);

// # outer function scope
// ======================
function urlBuilder(scheme) {
  return function (domain) {
    return function (path) {
      return `${scheme}://${domain}/${path}`;
    };
  };
}

console.log(urlBuilder('https')('codehance.com')('courses'));


// # block scope
// =============
{
  var name = "Susan";
  // let name = "Susan";
  // const name = "Susan";
}

console.log(name);

// # further reading
// =================
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures