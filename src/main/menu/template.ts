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

import { is } from "electron-util";

import { translate } from "../i18n/i18n";
import getAppMenu from "./menus/app";
import getEditMenu from "./menus/edit";
import getFileMenu from "./menus/file";
import getHelpMenu from "./menus/help";
import getViewMenu from "./menus/view";
import getWindowMenu from "./menus/window";
import getPreferencesItem from "./preferencesItem";

export default function getMenuTemplate(): MenuItemConstructorOptions[] {
	const appMenu = getAppMenu();
	const editMenu = getEditMenu();
	const fileMenu = getFileMenu();
	const helpMenu = getHelpMenu();
	const preferencesItem = getPreferencesItem();
	const viewMenu = getViewMenu();
	const windowMenu = getWindowMenu();

	if (is.macos) {
		// Add macOS-specific items
		(editMenu.submenu as MenuItemConstructorOptions[]).push(
			{ type: "separator" },
			{
				label: translate("speech"),
				submenu: [
					{
						label: translate("start-speaking"),
						role: "startSpeaking",
					},
					{
						label: translate("stop-speaking"),
						role: "stopSpeaking",
					},
				],
			},
		);
		windowMenu.submenu = [
			{
				label: translate("close"),
				role: "close",
			},
			{
				label: translate("minimize"),
				role: "minimize",
			},
			{
				label: translate("zoom"),
				role: "zoom",
			},
			{ type: "separator" },
			{
				label: translate("bring-all-to-front"),
				role: "front",
			},
		];
	} else {
		// Add preferences under "File" (will be added under "Mini Diary" for macOS)
		(fileMenu.submenu as MenuItemConstructorOptions[]).push(preferencesItem);
	}

	return [...(is.macos ? [appMenu] : []), fileMenu, editMenu, viewMenu, windowMenu, helpMenu];
}
