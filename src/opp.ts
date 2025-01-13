interface Props {
  name: string;
  age: number;
  job: string;
}

class Employee {
  constructor(private _name: string, private _age: number, private _job: string) {}

  printEmp() {
    console.log(`${this._name}의 나이는 ${this._age}이고 직업은 ${this._job}이다.`);
  }

  get getName() {
    return this._name;
  }

  set setName(value: string) {
    this._name = value;
  }
}

let employee1 = new Employee("강챙", 23, "학생");

employee1.printEmp();
