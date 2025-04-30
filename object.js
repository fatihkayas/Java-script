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
  
const teacher = {
    name: "John",
    age: 30,
    yearsOfExperience: 5,
    teach() {
      console.log(`${this.name} is ${this.age} year old  teaching.`);
    }
    };
teacher.teach();
