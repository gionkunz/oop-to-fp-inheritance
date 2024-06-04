// Interfaces for properties
interface Employee {
  readonly name: string;
  readonly age: number;
}

interface Manager extends Employee {
  readonly department: string;
}

interface Director extends Manager {
  readonly region: string;
}

function getEmployeeDetails(employee: Employee): string {
  return `Name: ${employee.name}, Age: ${employee.age}`;
}

function getManagerDetails(manager: Manager): string {
  return `${getEmployeeDetails(manager)}, Department: ${manager.department}`;
}

function getDirectorDetails(director: Director): string {
  return `${getManagerDetails(director)}, Region: ${director.region}`;
}

function manage(manager: Manager): string {
  return `${manager.name} is managing the ${manager.department} department.`;
}

function makeStrategicDecision(director: Director): string {
  return `${director.name} is making strategic decisions for the ${director.region} region.`;
}

function receiveBonus(employee: Manager, performance: number): string {
  return `${employee.name} has received a performance bonus of ${performance * 1000} dollars.`;
}

function receiveCompanyBonus(director: Director, performance: number): string {
  return `${director.name} has received a company-wide performance bonus of ${performance * 5000} dollars.`;
}

// Example usage:
const employee: Employee = { name: "Alice", age: 30 };
console.log(getEmployeeDetails(employee));

const manager: Manager = { name: "Bob", age: 40, department: "Sales" };
console.log(getManagerDetails(manager));
console.log(manage(manager));
console.log(receiveBonus(manager, 0.8));

const director: Director = { name: "Carol", age: 50, department: "Marketing", region: "North America" };
console.log(getDirectorDetails(director));
console.log(manage(director));
console.log(makeStrategicDecision(director));
console.log(receiveBonus(director, 0.9)); // Director can receive manager's bonus
console.log(receiveCompanyBonus(director, 0.9)); // Director's additional company-wide bonus
