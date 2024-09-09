import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialog, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: "app-user-detail",
	standalone: true,
	imports: [CommonModule, MatCardModule, MatIconModule],
	templateUrl: "./user-detail.component.html",
	styleUrl: "./user-detail.component.scss",
})
export class UserDetailComponent {}
