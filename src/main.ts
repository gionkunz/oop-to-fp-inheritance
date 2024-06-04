class Employee {
  constructor(public name: string, public age: number) {}

  getDetails(): string {
      return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Manager extends Employee {
  constructor(name: string, age: number, public department: string) {
      super(name, age);
  }

  getDetails(): string {
      return `${super.getDetails()}, Department: ${this.department}`;
  }

  manage(): string {
      return `${this.name} is managing the ${this.department} department.`;
  }
}

class Director extends Manager {
  constructor(name: string, age: number, department: string, public region: string) {
      super(name, age, department);
  }

  getDetails(): string {
      return `${super.getDetails()}, Region: ${this.region}`;
  }

  makeStrategicDecision(): string {
      return `${this.name} is making strategic decisions for the ${this.region} region.`;
  }
}

const employee = new Employee("Alice", 30);
console.log(employee.getDetails());

const manager = new Manager("Bob", 40, "Sales");
console.log(manager.getDetails());
console.log(manager.manage());

const director = new Director("Carol", 50, "Marketing", "North America");
console.log(director.getDetails());
console.log(director.manage());
console.log(director.makeStrategicDecision());