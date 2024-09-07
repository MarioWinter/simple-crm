import { Injectable, inject } from "@angular/core";
import { Firestore, doc, addDoc, collection, onSnapshot } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class UsersService {
	firestore: Firestore = inject(Firestore);
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
				console.log("Document written with ID:", docRef);
			});
	}

	subUserList() {
		return onSnapshot(this.getAllUsersRef(), (userList) => {
			userList.forEach((user) => {});
		});
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
