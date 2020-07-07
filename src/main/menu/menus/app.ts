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

import { app, MenuItemConstructorOptions } from "electron";

import { translate } from "../../i18n/i18n";
import getPreferencesItem from "../preferencesItem";

const appName = app.name;

export default function getAppMenu(): MenuItemConstructorOptions {
	const preferencesItem = getPreferencesItem();

	return {
		label: appName,
		submenu: [
			{
				label: translate("about-app", { appName }),
				role: "about",
			},
			{ type: "separator" },
			preferencesItem,
			{ type: "separator" },
			{
				label: translate("hide-app", { appName }),
				role: "hide",
			},
			{
				label: translate("hide-others"),
				role: "hideOthers",
			},
			{
				label: translate("show-all"),
				role: "unhide",
			},
			{ type: "separator" },
			{
				label: translate("quit-app", { appName }),
				role: "quit",
			},
		],
	};
}