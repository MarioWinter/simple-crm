import { Injectable, inject } from "@angular/core";
import { Firestore, doc, collectionData, collection, onSnapshot } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class UsersService {
	firestore: Firestore = inject(Firestore);

	constructor() {}

	getFirestoreDocumentReference(collectionId: string, documentId: string) {
		return doc(collection(this.firestore, collectionId), documentId);
	}
}
