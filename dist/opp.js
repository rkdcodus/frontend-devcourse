"use strict";
class Employee {
    constructor({ name, age, job }) {
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
    set setName(value) {
        this._name = value;
    }
}
let employee1 = new Employee({
    name: "강챙",
    age: 24,
    job: "학생",
});
employee1.printEmp();
//# sourceMappingURL=opp.js.map