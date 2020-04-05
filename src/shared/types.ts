/*
MIT License
Copyright (c) 2018 Samuel Meuli

Permission is hereby granted, free of charge,
to any person obtaining a copy of this software and
associated documentation files (the "Software"),
to deal in the Software without restriction,
including without limitation the rights to use,
copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission
notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

export interface JsonObject {
	[x: string]: JsonValue;
}
export type JsonArray = Array<JsonValue>;
export type JsonValue = string | number | boolean | null | JsonArray | JsonObject;

// Overlay

export type OverlayType = "none" | "go-to-date" | "import" | "preferences" | "statistics";

// I18n

// prettier-ignore
export interface Translations {
	// Menu (defined by macOS)
	"about-app": string,
	"bring-all-to-front": string,
	"close": string,
	"copy": string,
	"cut": string,
	"edit": string,
	"file": string,
	"help": string,
	"hide-app": string,
	"hide-others": string,
	"minimize": string,
	"paste": string,
	"preferences": string,
	"quit-app": string,
	"redo": string,
	"select-all": string,
	"show-all": string,
	"speech": string,
	"start-speaking": string,
	"stop-speaking": string,
	"undo": string,
	"view": string,
	"window": string,
	"zoom": string,

	// Menu (app-specific)
	"export": string,
	"export-to-format": string,
	"go-to-date": string,
	"go-to-today": string,
	"import": string,
	"import-from-format": string,
	"license": string,
	"lock-diary": string,
	"next-day": string,
	"next-month": string,
	"previous-day": string,
	"previous-month": string,
	"privacy-policy": string,
	"statistics": string;
	"website": string,

	// Weekdays
	"sunday": string,
	"monday": string,
	"tuesday": string,
	"wednesday": string,
	"thursday": string,
	"friday": string,
	"saturday": string,

	// Theme
	"dark": string,
	"light": string,
	"theme": string,

	// Calendar
	"today": string,

	// Editor
	"add-a-title": string,
	"bold": string,
	"bullets": string,
	"italic": string,
	"list": string,
	"write-something": string,

	// Search
	"clear": string,
	"no-results": string,
	"no-title": string,
	"search": string,

	// Preferences
	"allow-future-entries": string,
	"auto": string,
	"diary-entries": string,
	"first-day-of-week": string,
	"no": string,
	"ok": string,
	"reset-diary": string,
	"reset-diary-confirm": string,
	"reset-diary-msg": string,

	// Password and directory
	"change-directory": string,
	"change-password": string,
	"choose-password": string,
	"decryption-error": string,
	"diary-file": string,
	"file-exists": string,
	"move-error-msg": string,
	"move-error-title": string,
	"move-file": string,
	"new-password": string,
	"password": string,
	"passwords-no-match": string,
	"repeat-new-password": string,
	"repeat-password": string,
	"select-directory": string,
	"set-password": string,
	"unlock": string,
	"wrong-password": string,

	// Statistics
	"total-entries": string,
	"entries-per-week": string,
	"streak-best": string,
	"streak-current": string,
	"total-words": string,
	"words-per-entry": string,

	// Import
	"import-error-msg": string,
	"import-error-title": string,
	"import-instructions-day-one": string,
	"import-instructions-jrnl": string,
	"import-instructions-mini-diary": string,
	"start-import": string,

	// Export
	"export-error-msg": string,
	"export-error-title": string,

	// Other
	"loading": string,
}
