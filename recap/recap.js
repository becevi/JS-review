//CLASS recap

// todo ---> using static method, print out number of fruits in myBowl array

class FruitBowl {
  constructor() {
    this._material = "Wood";
  }

  static numFruits(bowl) {
    return bowl.length;
  }
}

const myFruitBowl = new FruitBowl();
const myBowl = ["apple", "orang", "banana"];

console.log(FruitBowl.numFruits(myBowl));
// >>> 3

//

//todo --->  which is true?

class Vehicle {
  constructor(make, model) {
    this._make = make;
    this._model = model;
  }
}

class Van extends Vehicle {
  constructor(make, model, cargo) {
    super(make, model);
    this._cargo = cargo;
  }

  cargoCount() {
    return this._cargo.lenght;
  }
}

const myVan = new Van("Ford", "Transit", ["books", "furniture"]);

// _make, _model and _cargo properties are all myVan object's properties,
// because _make and _model properties are inherited from the parent Vehicle class

//

// Todo ---> spot the error in the code

class Computer {
  constructor(type, size) {
    this._type = type;
    this._size = size;
    // }, <--- this is the error, there's no comma between methods in class syntax
  }

  printType() {
    console.log("This computer type is: " + this._type);
  }
}

//

// Todo ---> Which is a methor of the RentalUnit class?

class RentalUnit {
  constructor(address, cost) {
    this._address = address;
    this._cost = cost;
  }
  get address() {
    return this._address;
  }

  get cost() {
    return this._cost;
  }

  calculateMonthly() {
    return this._cost / 12;
  }
}

// A: .calculateMonthly() is the method

//

// TODO ---> Whice is true?

class Test {
  constructor(subject) {
    this._subject = subject;
  }
}

const myTest = new Test("Math");

// A: The keyword this in the constructor references an instance of the class Test.

//

// TODO --->
