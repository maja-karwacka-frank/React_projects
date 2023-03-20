class Department {
	// name: string; // default = public
	private employees: string[] = []; // metody dostęne tylko z wnętrza obiektu, nie można używać innych, zewnętrznych

	constructor(private readonly id: string, public name: string) {
		// this.name = n;
	}

	describe(this: Department) {
		console.log(`Department (${this.id}): ${this.name}`);
	}

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

const accounting = new Department('d1', 'Accounting');

console.log(accounting);

accounting.describe();

const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();

accounting.addEmployee('Maja');
accounting.addEmployee('Wojtek');
accounting.printEmployeeInformation();

// accounting.employees[2] = 'Anna'; niedozwolona metoda z zewnątrz przy użyciu private

// inheritance

class ITDepartment extends Department {
	admins: string[];
	constructor(id: string, admins: string[]) {
		super(id, 'IT');
		this.admins = admins; // this możemy użyć dopiero po super()
	}
}

const it = new ITDepartment('d1', ['Maja']);
it.describe();
console.log(it);

class AccountingDepartment extends Department {
	constructor(id: string, private reports: string[]) {
		super(id, 'Accounting');
	}

	addReport(text: string) {
		this.reports.push(text);
	}

	printReports() {
		console.log(this.reports);
	}
}

const account = new AccountingDepartment('d2', []);
account.addReport('New accounting report...');
console.log(account);
