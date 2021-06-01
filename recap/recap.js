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
class Employee {
  constructor(name, hourlyWage) {
    this.name = name;
    this.hourlyWage = hourlyWage;
    this.hoursWorked = 0;
  }

  logHours(increment) {
    return (this.hoursWorked += increment);
  }

  generatePaycheck() {
    console.log(this.hoursWorked * this.hourlyWage);
    this.hoursWorked = 0;
  }
}
//

// TODO ---> Create a static method within the Dog class named bark that takes no parameters, and prints out 'Woof!' to the console.

class Dog {
  constructor(name) {
    this.name = name;
  }

  call() {
    console.log(this.name + "!");
  }

  static bark() {
    console.log("Woof!");
  }
}
//

// TODO ---> Below the constructor, add a function named advanceGrade that increments the _grade property by one.

class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
  advanceGrade() {
    this.grade++;
  }
}
//

class House {
  constructor(numRooms, numWindows, location) {
    this.numRooms = numRooms;
    this.numWindows = numWindows;
    this.location = location;
  }

  fixSink() {
    console.log("Try pouring drano drown the drain.");
  }
}

const myHouse = new House(3, 15, "USA");
//

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this.title;
  }

  set title(newTitle) {
    this.title = newTitle;
  }
}

// TODO ---> What does the keyword this refer to in the constructor method of this code?

class Company {
  constructor(numEmployees, product, benefits) {
    this.numEmployees = numEmployees;
    this.product = prodcut;
    this.benefits = benefits;
  }
}

// A: The newly created instance of the Company class.

//

class FruitBowl {
  constructor() {
    this.material = "Wood";
  }
  
  static numFruits(bowl) {
    return bowl.length;
  }

  const myFruitBowl = new FruitBowl();
  const myBowl = ["apple", "orange", "banana"];

  console.log(FruitBowl.numFruits(myBowl));
}

//

