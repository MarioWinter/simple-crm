import { Injectable, inject } from "@angular/core";
import { Firestore, doc, collection, onSnapshot } from "@angular/fire/firestore";
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

	subUserList() {
		return onSnapshot(this.getAllUsersRef(), (userList) => {
			userList.forEach((user) => {
				console.log(user.id);
			});
		});
	}

	subUser() {
		return onSnapshot(this.getSingleDocRef("users", "zZzHDSQCgJgql4NSFzvD"), (user) => {
			console.log(user.id, user.data());
		});
	}

	getAllUsersRef() {
		return collection(this.firestore, "users");
	}

	getSingleDocRef(collectionId: string, documentId: string) {
		return doc(collection(this.firestore, collectionId), documentId);
	}
}
