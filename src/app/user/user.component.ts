import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";

@Component({
	selector: "app-user",
	standalone: true,
	imports: [MatButtonModule, MatIconModule, MatTooltipModule],
	templateUrl: "./user.component.html",
	styleUrl: "./user.component.scss",
})
export class UserComponent {}
