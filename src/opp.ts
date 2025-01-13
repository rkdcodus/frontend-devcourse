interface Props {
  name: string;
  age: number;
  job: string;
}

class Employee {
  private _name: string;
  private _age: number;
  private _job: string;

  constructor({ name, age, job }: Props) {
    this._name = name || "";
    this._age = age || 0;
    this._job = job || "";
  }

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

let employee1 = new Employee({
  name: "강챙",
  age: 24,
  job: "학생",
});

employee1.printEmp();
