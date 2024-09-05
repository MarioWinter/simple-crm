import { Injectable } from "@angular/core";
import { NativeDateAdapter } from "@angular/material/core";

@Injectable({
	providedIn: "root",
})
export class GermanDateAdapter extends NativeDateAdapter {
	override parse(value: string): Date | null {
		if (typeof value === "string") {
			const parts = value.split(".");
			if (parts.length === 3) {
				const day = Number(parts[0]);
				const month = Number(parts[1]) - 1;
				const year = Number(parts[2]);
				return new Date(year, month, day);
			}
		}
		return super.parse(value);
	}

	override format(date: Date, displayFormat: Object): string {
		if (displayFormat === "input") {
			const day = date.getDate();
			const month = date.getMonth() + 1;
			const year = date.getFullYear();
			return `${this.pad(day)}.${this.pad(month)}.${year}`;
		}
		return super.format(date, displayFormat);
	}

	private pad(n: number): string {
		return n < 10 ? `0${n}` : `${n}`;
	}
}
