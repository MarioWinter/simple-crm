import { Component } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

@Component({
	selector: "app-dialog-add-user",
	standalone: true,
	imports: [MatDialogContent, MatFormFieldModule, MatDialogActions, MatButtonModule, FormsModule, MatInputModule, MatDialogTitle, MatDialogClose],
	templateUrl: "./dialog-add-user.component.html",
	styleUrl: "./dialog-add-user.component.scss",
})
export class DialogAddUserComponent {}
