function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car("Ford", "Mustang", 2021);
console.log(myCar.make); // Ford
console.log(myCar.model); // Mustang
console.log(myCar.year); // 2021


const Animal = {
    type: "Invertebrates",
    displayType() {
      console.log(this.type);
    },
  };
  const fish = Object.create(Animal);
  fish.type = "Fishes";
  




/* 1. Using Object Literal (the easiest way)
This is the most common and straightforward method:*/


const teacher = {
    name: "John",
    age: 30,
    yearsOfExperience: 5,
    teach() {
      console.log(`${this.name} is ${this.age} year old  teaching.`);
    }
    };
teacher.teach();


/* Using a Constructor Function
This method lets you create multiple similar objects using a function.
*/

function Teacher(name, age, yearsOfExperience) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.teach = function() {
      console.log(`${this.name} is ${this.age} year old  teaching.`);
    };
  }

/* ✅ 3. Using Object.create()
This method lets you create an object that inherits from another:*/


const baseTeacher = {
    teach() {
      console.log("Teaching...");
    }
  };
  
  //const teacher = Object.create(baseTeacher);
  teacher.name = "Dr. Lee";
  teacher.subject = "History";
  teacher.teach(); // Output: Teaching...
  

let person = {
    name: "Mosh",
    age: 30,
    walk() {
      console.log("Walking...");
    },
    talk() {
      console.log("Talking...");
    },
    };

person.walk(); // Output: Walking...



let selection = "name";
person[selection] = "John";


let selectedColor = ['red', 'blue'];
console.log(selectedColor);

let selectedColor2 = new Array('red', 'blue');
selectedColor2[2] = 'green';
console.log(selectedColor2);


// function

function great(name) {
    console.log("Hello " + name);
}
great("John");

/*

Think of a parameter as a placeholder that will receive a value when the function is called.

🔹 Argument:
An argument is the actual value passed to the function when you call it.
👉 In your code, "John" is the argument.

greet("John"); // ← "John" is an argument

*/


// Performing a task

// calculate qa value

function square(number) {
    // return number * number;
    return number * number;
}

let number = square(5);
console.log(number); // Output: 25