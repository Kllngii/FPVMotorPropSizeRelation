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

import { Menu } from "electron";

import getMenuTemplate from "./template";

// IDs of menu items to disable when the diary is locked
const DISABLED_MENU_ITEMS = [
	"exportJsonMiniDiary",
	"exportMd",
	"exportPdf",
	"exportTxtDayOne",
	"goToDate",
	"goToToday",
	"importJsonDayOne",
	"importJsonJrnl",
	"importJsonMiniDiary",
	"importTxtDayOne",
	"lock",
	"nextDay",
	"nextMonth",
	"previousDay",
	"previousMonth",
	"statistics",
];

// Application menu
let menu: Menu;

/**
 * Disable all menu items with IDs specified in the DISABLED_MENU_ITEMS array
 */
export function disableMenuItems(): void {
	DISABLED_MENU_ITEMS.forEach((id): void => {
		menu.getMenuItemById(id).enabled = false;
	});
}

/**
 * Enable all menu items with IDs specified in the DISABLED_MENU_ITEMS array
 */
export function enableMenuItems(): void {
	DISABLED_MENU_ITEMS.forEach((id): void => {
		menu.getMenuItemById(id).enabled = true;
	});
}

/**
 * Build the application menu from the template, activate it and disable all menu items which should
 * be inaccessible when the diary is locked
 */
export function buildMenu(): void {
	const template = getMenuTemplate();
	menu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(menu);
	disableMenuItems();
}
