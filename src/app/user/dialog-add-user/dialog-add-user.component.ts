import { Component } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";

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
	],
	templateUrl: "./dialog-add-user.component.html",
	styleUrl: "./dialog-add-user.component.scss",
})
export class DialogAddUserComponent {
	constructor(public dialog: MatDialog) {}
}
