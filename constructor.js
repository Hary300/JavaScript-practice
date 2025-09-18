//1. function constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

let book1 = new Book('Harry Potter', 'J.K. Rowling', 1997);
let book2 = new Book('The Hobbit', 'J.R.R. Tolkien', 1937);

console.log(book1.title);
console.log(book2);
// console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);

console.log('🌟');

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  //to make it talk? use this
  this.drive = function () {
    console.log(`Driving a ${this.brand} ${this.model}`);
  };
}

let car1 = new Car('Toyota', 'Corolla', 2020);
let car2 = new Car('Honda', 'Civic', 2022);

car1.drive(); // Driving a Toyota Corolla
car2.drive(); // Driving a Honda Civic

console.log('🌟');
function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;

  this.introduce = function () {
    console.log(
      `Hi, my name is ${this.name}, I am ${this.age} years old, in grade ${this.grade}.`
    );
  };
}

let student1 = new Student('Alice', 15, 10);
let student2 = new Student('Budi', 16, 11);
let student3 = new Student('Citra', 14, 9);
let student4 = new Student('Deni', 17, 12);

student1.introduce();
student2.introduce();
student3.introduce();
student4.introduce();

console.log('🌟');
function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.getSummary = function () {
    console.log(
      `${this.title} was directed by ${this.director} in ${this.year}.`
    );
  };
}

let movie1 = new Movie('Inception', 'Christopher Nolan', 2010);
let movie2 = new Movie('The Matrix', 'The Wachowskis', 1999);
let movie3 = new Movie('Interstellar', 'Christopher Nolan', 2014);
let movie4 = new Movie('Spirited Away', 'Hayao Miyazaki', 2001);

movie1.getSummary();
movie2.getSummary();
movie3.getSummary();
movie4.getSummary();

console.log('🌟');
//2. class constructor
class Pet {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }
  introduce() {
    console.log(
      `Hi, I'm ${this.name}, a ${this.age}-year-old ${this.species}.`
    );
  }
  isOld() {
    console.log(this.age > 10 ? 'This pet is old.' : 'This pet is young.');
  }
}

let pet1 = new Pet('Buddy', 'Dog', 12);
let pet2 = new Pet('Mimi', 'Cat', 5);
let pet3 = new Pet('Coco', 'Parrot', 3);
let pet4 = new Pet('Rocky', 'Turtle', 15);
let pet5 = new Pet('Luna', 'Rabbit', 2);

pet1.introduce();
pet1.isOld();

console.log('🌟');
class Airplane {
  constructor(airline, model, capacity) {
    this.airline = airline;
    this.model = model;
    this.capacity = capacity;
  }
  fly() {
    console.log(`The ${this.airline} ${this.model} is flying.`);
  }
  checkCapacity() {
    console.log(this.capacity > 300 ? 'Large airplane' : 'Small airplane');
  }
}

let airplane1 = new Airplane('Garuda Indonesia', 'Boeing 777', 314);
let airplane2 = new Airplane('Singapore Airlines', 'Airbus A380', 500);
let airplane3 = new Airplane('AirAsia', 'Airbus A320', 180);
let airplane4 = new Airplane('Emirates', 'Boeing 747', 416);
let airplane5 = new Airplane('Lion Air', 'Boeing 737', 210);

airplane1.fly();
airplane1.checkCapacity();

console.log('🌟');
class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }

  play() {
    console.log(`Playing ${this.title} by ${this.artist}.`);
  }
  isLong() {
    console.log(
      this.duration > 5 ? 'This is a long song.' : 'This is a short song.'
    );
  }
}

let song1 = new Song('Shape of you', 'Ed Sheeran', 4);
let song2 = new Song('Bohemian Rhapsody', 'Queen', 6);
let song3 = new Song('Blinding Lights', 'The Weeknd', 3);
let song4 = new Song('Hotel California', 'Eagles', 7);
let song5 = new Song('Perfect', 'Ed Sheeran', 4);

song1.play();
song1.isLong();
