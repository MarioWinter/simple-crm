import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialog, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
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
		MatDialogContent,
		MatFormFieldModule,
		MatDialogActions,
		MatButtonModule,
		FormsModule,
		MatInputModule,
		MatDialogTitle,
		MatDialogClose,
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
	constructor(public dialog: MatDialog, private dateAdapter: DateAdapter<any>) {
		this.dateAdapter.setLocale("de-DE");
	}

	saveUser() {
		if (!this.loading) {
			this.loading = true;
			this.user.birthDate = this.birthDate.getTime();
			this.usersService.addUser(this.user.toJSON());
		} else {
			this.loading = false;
		}
	}
}
