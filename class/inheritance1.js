class amount {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
}
class saving_account extends amount {
  constructor(id, name, salary, location) {
    super(id, name, salary);
    this.location = location;
  }
}
let a1 = new saving_account(101, "theju", 50000, "aranakatte");
console.log(a1);
