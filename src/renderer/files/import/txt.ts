import moment from "moment";

import { Entries, ImportEntry, DiaryEntry } from "../../types";
import { toIndexDate } from "../../utils/dateFormat";
import buildEntries from "./buildEntries";

/**
 * Parse the TXT file generated by a Day One export and format it as an Entries object
 */
export function parseDayOneTxt(dayOneTxt: string): Entries {
	const now = new Date().toString();

	// Split up diary entries and filter out empty ones
	const parsedEntries = dayOneTxt.split("\tDate:\t").filter((entry): string => entry);

	return buildEntries(parsedEntries, (parsedEntry: ImportEntry): {
		indexDate: string;
		entry: DiaryEntry;
	} => {
		const parsedEntryCast = parsedEntry as string;

		// Split up lines
		const lines = parsedEntryCast.split("\n");

		// Parse date (format "01 January 1980 at 00:00:00 GMT") and format it as index date
		const dateStr = lines.shift();
		const dateMoment = moment(dateStr, "DD MMMM YYYY");
		if (!dateMoment.isValid()) {
			throw Error(`Invalid date: "${dateStr}"`);
		}
		const indexDate = toIndexDate(dateMoment);

		// Remove empty lines and meta info from start of entry array
		while (lines.length > 0 && (lines[0] === "" || lines[0].startsWith("\t"))) {
			lines.shift();
		}

		const titleLine = lines.shift();
		const title = titleLine ? titleLine.trim() : ""; // Use first line as title
		const text = lines.join("\n").trim(); // Use rest as entry text

		const entry = { dateUpdated: now, title, text };
		return { indexDate, entry };
	});
}
