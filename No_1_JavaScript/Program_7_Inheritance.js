// || Class ||
class Employee {
	// Creating Constructor to Employe class 
	constructor(name) {
		console.log("Thanks for Applying!", name)
	}
	welcome() {
		console.log("Hello, You're welcome to this employee class!");
	}
	join(name) {
		this.name = name;
		console.log("Hello, You're welcome to this employee class!");
	}
}
// || Object ||
let Zihan = new Employee("Farhan Sadid Zihan");
Zihan.join(Zihan);
// || Inheritance ||
class Programmer extends Empoyee {
	hiCoder() {
		console.log("Big Fan Sir!");
	}
}