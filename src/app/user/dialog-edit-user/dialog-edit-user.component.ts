import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MatDialog, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatProgressBarModule } from "@angular/material/progress-bar";

import { UsersService } from "../../core/services/firebase-services/users.service";
import { User } from "../../core/models/user.class";

@Component({
	selector: "app-dialog-edit-user",
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
	templateUrl: "./dialog-edit-user.component.html",
	styleUrl: "./dialog-edit-user.component.scss",
})
export class DialogEditUserComponent {
	loading: boolean = false;
	user!: User;
	usersService = inject(UsersService);
	constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DialogEditUserComponent>) {}

	saveUser() {
		this.loading = true;
		this.usersService.updateUser("users", this.user.id, this.user.toJSON());
		this.dialogRef.close();
		this.loading = false;
	}

	cancel() {
		this.dialogRef.close();
	}
}
