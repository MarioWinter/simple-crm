import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { GermanDateAdapter } from "./core/services/german-date-adapter.service";

import { routes } from "./app.routes";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

const DE_DATE_FORMATS = {
	parse: {
		dateInput: "DD.MM.YYYY",
	},
	display: {
		dateInput: "input",
		monthYearLabel: "MMM YYYY",
		dateA11yLabel: "LL",
		monthYearA11yLabel: "MMMM YYYY",
	},
};

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideAnimationsAsync(),
		{ provide: MAT_DATE_LOCALE, useValue: "de-DE" },
		{ provide: DateAdapter, useClass: GermanDateAdapter },
		{ provide: MAT_DATE_FORMATS, useValue: DE_DATE_FORMATS },
	],
};
