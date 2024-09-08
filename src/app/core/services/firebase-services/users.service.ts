import { Injectable, inject } from "@angular/core";
import { Firestore, doc, addDoc, collection, onSnapshot, updateDoc, DocumentData } from "@angular/fire/firestore";
import { UserInterface } from "../../interfaces/user";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class UsersService {
	firestore: Firestore = inject(Firestore);
	allUsers: UserInterface[] = [];
	unsubUserList;
	unsubUser;

	constructor() {
		this.unsubUserList = this.subUserList();
		this.unsubUser = this.subUser();
	}

	ngOnDestroy(): void {
		this.unsubUserList();
		this.unsubUser();
	}

	async addUser(item: {}) {
		await addDoc(this.getAllUsersRef(), item)
			.catch((err) => {
				console.error(err);
			})
			.then((docRef) => {
				//console.log("Document written with ID:", docRef);
			});
	}

	async updateUser(colId: string, docId: string, item: {}) {
		await updateDoc(this.getSingleDocRef(colId, docId), item).catch((err) => {
			console.error(err);
		});
	}

	subUserList() {
		return onSnapshot(this.getAllUsersRef(), (userList) => {
			this.allUsers = [];
			userList.forEach((user) => {
				this.allUsers.push(this.toJSON(user.data(), user.id));
			});
		});
	}

	toJSON(obj: any, id: string): UserInterface {
		return {
			id: id || "",
			firstName: obj.firstName || "",
			lastName: obj.lastName || "",
			email: obj.email || "",
			birthDate: obj.birthDate || "",
			address: obj.address || "",
			zipCode: obj.zipCode || "",
			city: obj.city || "",
		};
	}

	subUser() {
		return onSnapshot(this.getSingleDocRef("users", "zZzHDSQCgJgql4NSFzvD"), (user) => {});
	}

	getAllUsersRef() {
		return collection(this.firestore, "users");
	}

	getSingleDocRef(collectionId: string, documentId: string) {
		return doc(collection(this.firestore, collectionId), documentId);
	}
}
