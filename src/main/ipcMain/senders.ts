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

import { OverlayType } from "../../shared/types";
import { getWindow } from "../window";

// Date

export const setDaySelectedNext = (): void => {
	getWindow().webContents.send("nextDay");
};

export const setDaySelectedPrevious = (): void => {
	getWindow().webContents.send("previousDay");
};

export const setDaySelectedToday = (): void => {
	getWindow().webContents.send("goToToday");
};

export const setMonthSelectedNext = (): void => {
	getWindow().webContents.send("nextMonth");
};

export const setMonthSelectedPrevious = (): void => {
	getWindow().webContents.send("previousMonth");
};

// Export

export const exportJsonMiniDiary = (): void => {
	getWindow().webContents.send("exportJsonMiniDiary");
};

export const exportMd = (): void => {
	getWindow().webContents.send("exportMd");
};

export const exportPdf = (): void => {
	getWindow().webContents.send("exportPdf");
};

export const exportTxtDayOne = (): void => {
	getWindow().webContents.send("exportTxtDayOne");
};

// Import

export const importJsonDayOne = (): void => {
	getWindow().webContents.send("importJsonDayOne");
};

export const importJsonJrnl = (): void => {
	getWindow().webContents.send("importJsonJrnl");
};

export const importJsonMiniDiary = (): void => {
	getWindow().webContents.send("importJsonMiniDiary");
};

export const importTxtDayOne = (): void => {
	getWindow().webContents.send("importTxtDayOne");
};

// Lock

export const lock = (): void => {
	getWindow().webContents.send("lock");
};

// Overlays

export const openOverlay = (overlayType: OverlayType): void => {
	getWindow().webContents.send("openOverlay", overlayType);
};
