"use strict";
class Employee {
    constructor({ name, age, job }) {
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
//# sourceMappingURL=opp.js.map