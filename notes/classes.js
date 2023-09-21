// ES5 class constructor
function Person() {
  this.name = 'John';
  this.age = 23;
}

// ES5 class methods
Person.prototype.greet = function () {
  console.log('Hello, my name is ' + this.name + ' and I am ' + this.age);
}

// ES5 class inheritance
function Policeman() {
  Person.call(this);
  this.badgeNumber = '1234';
}

Policeman.prototype = Object.create(Person.prototype);
Policeman.prototype.arrest = function () {
  console.log('You are under arrest!');
}

var officer = new Policeman();
officer.greet();
officer.arrest();

