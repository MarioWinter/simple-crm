import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { DialogEditUserComponent } from "../dialog-edit-user/dialog-edit-user.component";

import { MatDialog, MatDialogModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";

import { UsersService } from "../../core/services/firebase-services/users.service";
import { User } from "../../core/models/user.class";

@Component({
	selector: "app-user-detail",
	standalone: true,
	imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatMenuModule, MatDialogModule],
	templateUrl: "./user-detail.component.html",
	styleUrl: "./user-detail.component.scss",
})
export class UserDetailComponent implements OnInit {
	userId: string = "";
	user: User = new User();
	usersService = inject(UsersService);

	constructor(private route: ActivatedRoute, public dialog: MatDialog) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			this.usersService.userId = params.get("id")!;
			this.usersService.subUser();
		});
	}

	editMenu() {
		this.dialog.open(DialogEditUserComponent);
	}
}
