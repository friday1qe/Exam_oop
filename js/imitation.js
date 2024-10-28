// Наслідування
// Базовий клас Vehicle
class Vehicle {
    constructor(make, model, year) {
      this.make = make;   // Марка транспортного засобу
      this.model = model; // Модель транспортного засобу
      this.year = year;   // Рік випуску
    }
  
    // Метод для опису транспортного засобу
    getDetails() {
      return `${this.year} ${this.make} ${this.model}`;
    }
  }
  
  // Похідний клас Car, який наслідує клас Vehicle
  class Car extends Vehicle {
    constructor(make, model, year, doors) {
      super(make, model, year); // Виклик конструктора базового класу
      this.doors = doors;       // Кількість дверей
    }
  
    // Перевизначений метод getDetails для автомобіля
    getDetails() {
      return `${super.getDetails()}, Doors: ${this.doors}`;
    }
  }
  
  // Похідний клас Bike, який наслідує клас Vehicle
  class Bike extends Vehicle {
    constructor(make, model, year, type) {
      super(make, model, year); // Виклик конструктора базового класу
      this.type = type;         // Тип велосипеда (гірський, міський тощо)
    }
  
    // Перевизначений метод getDetails для велосипеда
    getDetails() {
      return `${super.getDetails()}, Type: ${this.type}`;
    }
  }
  
  // Приклади використання
  const car = new Car("Toyota", "Camry", 2020, 4);
  console.log(car.getDetails()); // Виведе: "2020 Toyota Camry, Doors: 4"
  
  const bike = new Bike("Giant", "Escape 3", 2021, "mountain");
  console.log(bike.getDetails()); // Виведе: "2021 Giant Escape 3, Type: mountain"  