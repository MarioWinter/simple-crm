import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MatDialog, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { provideNativeDateAdapter } from "@angular/material/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { DateAdapter } from "@angular/material/core";

import { User } from "../../core/models/user.class";
import { UsersService } from "../../core/services/firebase-services/users.service";

@Component({
	selector: "app-dialog-add-user",
	standalone: true,
	imports: [
		MatFormFieldModule,
		MatButtonModule,
		FormsModule,
		MatInputModule,
		MatDialogTitle,
		MatDialogClose,
		MatDialogActions,
		MatDialogContent,
		MatIconModule,
		MatDividerModule,
		MatDatepickerModule,
		MatProgressBarModule,
		CommonModule,
	],
	providers: [provideNativeDateAdapter()],
	templateUrl: "./dialog-add-user.component.html",
	styleUrl: "./dialog-add-user.component.scss",
})
export class DialogAddUserComponent {
	user = new User();
	birthDate!: Date;
	loading: boolean = false;
	usersService = inject(UsersService);

	constructor(public dialog: MatDialog, private dateAdapter: DateAdapter<any>, public dialogRef: MatDialogRef<DialogAddUserComponent>) {
		this.dateAdapter.setLocale("de-DE");
	}

	saveUser() {
		if (!this.loading) {
			this.loading = true;
			this.user.birthDate = this.birthDate.getTime();
			this.usersService.addUser(this.user.toJSON());
		}
		this.loading = false;
		this.dialogRef.close();
	}

	cancel() {
		this.dialogRef.close();
	}
}
