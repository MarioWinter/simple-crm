import { Injectable, inject } from "@angular/core";
import { Firestore, doc, addDoc, collection, onSnapshot, updateDoc, DocumentData } from "@angular/fire/firestore";
import { User } from "../../models/user.class";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class UsersService {
	firestore: Firestore = inject(Firestore);
	allUsers: User[] = [];
	userId = "";
	user: User = new User();
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
				this.user = new User(user.data(), this.userId);
				this.allUsers.push(this.user);
			});
		});
	}

	subUser() {
		if (this.userId === "") {
			return () => {};
		} else {
			return onSnapshot(this.getSingleDocRef("users", this.userId), (user) => {
				this.user = new User(user.data(), this.userId);
			});
		}
	}

	getAllUsersRef() {
		return collection(this.firestore, "users");
	}

	getSingleDocRef(collectionId: string, documentId: string) {
		return doc(collection(this.firestore, collectionId), documentId);
	}
}
