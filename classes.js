// # example of class with constructor
// ===================================
class Vehicle {
  constructor(brand, model) {
    this.brand = brand
    this.model = model
  }

  fuel_up() {
    return `Your ${this.model}'s Gas tank is now full`;
  }

  drive() {
    return `The ${this.model} is now driving`;
  }
}

vehicle1 = new Vehicle('Honda', 'Ridgeline')
vehicle2 = new Vehicle('Audi', 'C4 Avant')

console.log(vehicle1.fuel_up())
console.log(vehicle1.drive())

console.log(vehicle2.fuel_up())
console.log(vehicle2.drive())

console.log(vehicle1.brand)
console.log(vehicle2.brand)

// # further reading
// =================
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes