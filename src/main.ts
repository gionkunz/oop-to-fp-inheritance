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

  receiveBonus(performance: number): string {
    return `${this.name} has received a performance bonus of ${performance * 1000} dollars.`;
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

  receiveCompanyBonus(performance: number): string {
    return `${this.name} has received a company-wide performance bonus of ${performance * 5000} dollars.`;
  }
}

// Example usage:
const employee = new Employee("Alice", 30);
console.log(employee.getDetails());

const manager = new Manager("Bob", 40, "Sales");
console.log(manager.getDetails());
console.log(manager.manage());
console.log(manager.receiveBonus(0.8));

const director = new Director("Carol", 50, "Marketing", "North America");
console.log(director.getDetails());
console.log(director.manage());
console.log(director.makeStrategicDecision());
console.log(director.receiveBonus(0.9)); // This does not fit well
console.log(director.receiveCompanyBonus(0.9)); // New method specific to Director

// The problem:
// The Director class inherits receiveBonus from Manager but needs an additional receiveCompanyBonus method.
// This breaks the single responsibility principle and adds unnecessary complexity.