interface Props {
  name: string;
  age: number;
  job: string;
}

class Employee {
  name: string;
  age: number;
  job: string;

  constructor({ name, age, job }: Props) {
    this.name = name || "";
    this.age = age || 0;
    this.job = job || "";
  }

  printEmp() {
    console.log(`${this.name}의 나이는 ${this.age}이고 직업은 ${this.job}이다.`);
  }
}

let employee1 = new Employee({
  name: "강챙",
  age: 24,
  job: "학생",
});

employee1.printEmp();
