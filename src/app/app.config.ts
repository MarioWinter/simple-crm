import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { GermanDateAdapter } from "./core/services/german-date-adapter.service";

import { routes } from "./app.routes";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

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
		{ provide: MAT_DATE_FORMATS, useValue: DE_DATE_FORMATS }, provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-d8c8d","appId":"1:444629331602:web:38a523f158dcfccd44804b","storageBucket":"simple-crm-d8c8d.appspot.com","apiKey":"AIzaSyDb_Q_cFrFjYv6pKc-5M3LG4sM9UXZ82jg","authDomain":"simple-crm-d8c8d.firebaseapp.com","messagingSenderId":"444629331602"})), provideFirestore(() => getFirestore()),
	],
};
