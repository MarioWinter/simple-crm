export class User {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	birthDate: number;
	address: string;
	zipCode: number;
	city: string;

	constructor(obj?: any, id?: any) {
		this.id = id || obj?.id || "";
		this.firstName = obj ? obj.firstName : "";
		this.lastName = obj ? obj.lastName : "";
		this.email = obj ? obj.email : "";
		this.birthDate = obj ? obj.birthDate : "";
		this.address = obj ? obj.address : "";
		this.zipCode = obj ? obj.zipCode : "";
		this.city = obj ? obj.city : "";
	}

	public toJSON() {
		return {
			id: this.id,
			firstName: this.firstName,
			lastName: this.lastName,
			email: this.email,
			birthDate: this.birthDate,
			address: this.address,
			zipCode: this.zipCode,
			city: this.city,
		};
	}
}
