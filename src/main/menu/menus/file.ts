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

import { MenuItemConstructorOptions } from "electron";

import { translate } from "../../i18n/i18n";
import {
	exportJsonMiniDiary,
	exportMd,
	exportPdf,
	exportTxtDayOne,
	importJsonDayOne,
	importJsonJrnl,
	importJsonMiniDiary,
	importTxtDayOne,
	lock,
	openOverlay,
} from "../../ipcMain/senders";

export default function getFileMenu(): MenuItemConstructorOptions {
	return {
		label: translate("file"),
		submenu: [
			{
				label: translate("lock-diary"),
				id: "lock",
				accelerator: "CmdOrCtrl+L",
				click(): void {
					lock();
				},
			},
			{ type: "separator" },
			{
				label: translate("import"),
				submenu: [
					{
						label: `${translate("import-from-format", { format: "JSON (Day One)" })}…`,
						id: "importJsonDayOne",
						click(): void {
							importJsonDayOne();
						},
					},
					{
						label: `${translate("import-from-format", { format: "JSON (jrnl)" })}…`,
						id: "importJsonJrnl",
						click(): void {
							importJsonJrnl();
						},
					},
					{
						label: `${translate("import-from-format", { format: "JSON (Mini Diary)" })}…`,
						id: "importJsonMiniDiary",
						click(): void {
							importJsonMiniDiary();
						},
					},
					{
						label: `${translate("import-from-format", { format: "TXT (Day One)" })}…`,
						id: "importTxtDayOne",
						click(): void {
							importTxtDayOne();
						},
					},
				],
			},
			{
				label: translate("export"),
				id: "export",
				submenu: [
					{
						label: `${translate("export-to-format", { format: "JSON (Mini Diary)" })}…`,
						id: "exportJsonMiniDiary",
						click(): void {
							exportJsonMiniDiary();
						},
					},
					{
						label: `${translate("export-to-format", { format: "Markdown" })}…`,
						id: "exportMd",
						click(): void {
							exportMd();
						},
					},
					{
						label: `${translate("export-to-format", { format: "PDF" })}…`,
						id: "exportPdf",
						click(): void {
							exportPdf();
						},
					},
					{
						label: `${translate("export-to-format", { format: "TXT (Day One)" })}…`,
						id: "exportTxtDayOne",
						click(): void {
							exportTxtDayOne();
						},
					},
				],
			},
			{ type: "separator" },
			{
				label: translate("statistics"),
				id: "statistics",
				click(): void {
					openOverlay("statistics");
				},
			},
		],
	};
}
