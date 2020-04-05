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

import { MenuItemConstructorOptions, shell } from "electron";

import { translate } from "../../i18n/i18n";

const URL_LICENSE = "https://github.com/samuelmeuli/mini-diary/blob/master/LICENSE.md";
const URL_PRIVACY_POLICY = "https://github.com/samuelmeuli/mini-diary/blob/master/PRIVACY.md";
const URL_WEBSITE = "https://minidiary.app";

export default function getHelpMenu(): MenuItemConstructorOptions {
	return {
		label: translate("help"),
		role: "help",
		submenu: [
			{
				label: translate("website"),
				click(): void {
					shell.openExternal(URL_WEBSITE);
				},
			},
			{ type: "separator" },
			{
				label: translate("license"),
				click(): void {
					shell.openExternal(URL_LICENSE);
				},
			},
			{
				label: translate("privacy-policy"),
				click(): void {
					shell.openExternal(URL_PRIVACY_POLICY);
				},
			},
		],
	};
}
