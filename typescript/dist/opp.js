"use strict";
class Employee {
    constructor(_name, _age, _job) {
        this._name = _name;
        this._age = _age;
        this._job = _job;
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
let employee1 = new Employee("강챙", 23, "학생");
employee1.printEmp();
//# sourceMappingURL=opp.js.map