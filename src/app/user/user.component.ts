import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UsersService } from "./../core/services/firebase-services/users.service";
import { Component, inject } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule, MatDialog } from "@angular/material/dialog";
import { DialogAddUserComponent } from "./dialog-add-user/dialog-add-user.component";
import { User } from "../../app/core/models/user.class";

@Component({
	selector: "app-user",
	standalone: true,
	imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, MatCardModule, CommonModule, RouterModule],
	templateUrl: "./user.component.html",
	styleUrl: "./user.component.scss",
})
export class UserComponent {
	user = new User();
	usersService = inject(UsersService);

	constructor(public dialog: MatDialog) {}

	openDialog() {
		this.dialog.open(DialogAddUserComponent);
	}
}
