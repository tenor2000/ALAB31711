// @ts-check

class Vehicle {
  status: "started" | "stopped" = "started";

  constructor(
    public make: string,
    public model: string,
    public wheels: number
  ) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 4);
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}

function printStatus(vehicle: Vehicle) {
  if (vehicle.status === "started") {
    console.log("The vehicle is started.");
  } else {
    console.log("The vehicle is stopped.");
  }
}

const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);

// Part 3 Creating a Generic Class

class NCycle<T> {
  status: "started" | "stopped" = "started";

  constructor(public make: T | T[], public model: T | T[], public wheels: T) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
  print(index: number = 0): void {
    if (!(this.make instanceof Array) && !(this.model instanceof Array)) {
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
    } else if (this.make instanceof Array && this.model instanceof Array) {
      `This NCycle has a ${this.make[index]} ${this.model[index]} at ${index}.`;
    } else {
      console.log("This NCycle was not created properly.");
    }
  }

  printAll(): void {
    if (
      this.make instanceof Array &&
      this.model instanceof Array &&
      this.model.length === this.make.length
    ) {
      for (let i = 0; i < this.make.length; i++) {
        this.print(i);
      }
    } else if (this.make instanceof String && this.model instanceof String) {
      this.print();
    } else {
      console.log("This NCycle was not created properly.");
    }
  }
}

// Part 4: Testing
