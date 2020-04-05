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
	setDaySelectedNext,
	setDaySelectedPrevious,
	setDaySelectedToday,
	setMonthSelectedNext,
	setMonthSelectedPrevious,
	openOverlay,
} from "../../ipcMain/senders";

export default function getViewMenu(): MenuItemConstructorOptions {
	return {
		label: translate("view"),
		submenu: [
			{
				label: `${translate("go-to-today")}`,
				id: "goToToday",
				accelerator: "CmdOrCtrl+T",
				click(): void {
					setDaySelectedToday();
				},
			},
			{
				label: `${translate("go-to-date")}…`,
				id: "goToDate",
				accelerator: "CmdOrCtrl+Shift+T",
				click(): void {
					openOverlay("go-to-date");
				},
			},
			{ type: "separator" },
			{
				label: translate("previous-day"),
				id: "previousDay",
				accelerator: "Left",
				click(): void {
					setDaySelectedPrevious();
				},
			},
			{
				label: translate("next-day"),
				id: "nextDay",
				accelerator: "Right",
				click(): void {
					setDaySelectedNext();
				},
			},
			{ type: "separator" },
			{
				label: translate("previous-month"),
				id: "previousMonth",
				accelerator: "CmdOrCtrl+Left",
				click(): void {
					setMonthSelectedPrevious();
				},
			},
			{
				label: translate("next-month"),
				id: "nextMonth",
				accelerator: "CmdOrCtrl+Right",
				click(): void {
					setMonthSelectedNext();
				},
			},
		],
	};
}
