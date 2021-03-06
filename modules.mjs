// Export and Import
// =================
// # Turns regular js file into js modules

// # hello.mjs
const ID = 3;

function hello_world() {
  return "Hello World!!!"
}

export { ID, hello_world }

// play.mjs
import { ID, hello_world } from './hello.mjs';

console.log(hello_world());
console.log(ID);

// # further reading
// =================
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules