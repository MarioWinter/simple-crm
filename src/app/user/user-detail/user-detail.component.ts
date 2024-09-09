import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

import { MatDialog, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

import { UsersService } from "../../core/services/firebase-services/users.service";
import { User } from "../../core/models/user.class";

@Component({
	selector: "app-user-detail",
	standalone: true,
	imports: [CommonModule, MatCardModule, MatIconModule],
	templateUrl: "./user-detail.component.html",
	styleUrl: "./user-detail.component.scss",
})
export class UserDetailComponent {
	userId: string = "";
	user: User | null = null;
	usersService = inject(UsersService);
	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			this.usersService.userId = params.get("id")!;
			this.usersService.subUser();
		});
	}
}
