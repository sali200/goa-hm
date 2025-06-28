class Employee {
  #id;
  #monthSalary;

  constructor(id, firstName, lastName, monthSalary) {
    this.#id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.monthSalary = monthSalary;
  }

  get id() {
    return this.#id;
  }

  get monthSalary() {
    return this.#monthSalary;
  }

  set monthSalary(value) {
    if (value > 0) {
      this.#monthSalary = value;
    } else {
      console.error("ხელფასი უნდა იყოს 0-ზე მეტი");
    }
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(full) {
    const parts = full.trim().split(" ");
    if (parts.length >= 2) {
      this.firstName = parts[0];
      this.lastName = parts.slice(1).join(" ");
    }
  }

  get yearSalary() {
    return this.#monthSalary * 12;
  }
}






class Manager extends Employee {
  constructor(id, firstName, lastName, monthSalary, department) {
    super(id, firstName, lastName, monthSalary);
    this.department = department;
  }

  set changeDepartment([newDept, newSalary]) {
    if (typeof newDept === "string" && newSalary > this.monthSalary) {
      this.department = newDept;
      this.monthSalary = newSalary;
    } else {
      console.warn("განყოფილების შეცვლა არ განხორციელდა. ახალი ხელფასი არასაკმარისია.");
    }
  }

  get yearSalary() {
    return super.yearSalary * 1.15;
  }

  info() {
    return `მენეჯერი ${this.fullName} მუშაობს ${this.department} განყოფილებაში. წლიური ხელფასი პრემიითაა: ${this.yearSalary} ₾`;
  }
}