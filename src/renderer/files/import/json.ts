import {
	Entries,
	DayOneJson,
	ImportEntry,
	DiaryEntry,
	DayOneEntry,
	JrnlJson,
	JrnlEntry,
	MiniDiaryJson,
	ListDiaryEntry,
} from "../../types";
import { toIndexDate } from "../../utils/dateFormat";
import buildEntries from "./buildEntries";

/**
 * Parse the JSON file generated by a Day One export and format it as an Entries object
 */
export function parseDayOneJson(jsonStr: string): Entries {
	const parsedEntries: DayOneJson = JSON.parse(jsonStr);

	return buildEntries(parsedEntries.entries, (parsedEntry: ImportEntry): {
		indexDate: string;
		entry: DiaryEntry;
	} => {
		const parsedEntryCast = parsedEntry as DayOneEntry;
		const { creationDate, modifiedDate, text: titleAndText } = parsedEntryCast;
		const indexDate = toIndexDate(new Date(creationDate));
		const dateUpdated = new Date(modifiedDate).toString();

		// Split title and text (if exists)
		let title;
		let text;
		const endOfTitlePos = titleAndText.indexOf("\n\n");
		if (endOfTitlePos <= 0) {
			title = titleAndText;
			text = "";
		} else {
			title = titleAndText.substring(0, endOfTitlePos);
			text = titleAndText.substring(endOfTitlePos + 2);
		}

		// Remove heading formatting from title
		if (title.startsWith("# ")) {
			title = title.substring(2);
		}

		const entry = { dateUpdated, title, text };
		return { indexDate, entry };
	});
}

/**
 * Parse the JSON file generated by a jrnl export and format it as an Entries object
 */
export function parseJrnlJson(jsonStr: string): Entries {
	const parsedEntries: JrnlJson = JSON.parse(jsonStr);
	const now = new Date().toString();

	return buildEntries(parsedEntries.entries, (parsedEntry: ImportEntry): {
		indexDate: string;
		entry: DiaryEntry;
	} => {
		const parsedEntryCast = parsedEntry as JrnlEntry;
		const { date, title, body } = parsedEntryCast;
		const indexDate = toIndexDate(new Date(date));

		const entry = { dateUpdated: now, title: title.trim(), text: body.trim() };
		return { indexDate, entry };
	});
}

/**
 * Parse the Mini Diary JSON file and format it as an Entries object
 */
export function parseMiniDiaryJson(jsonStr: string): Entries {
	const parsedJson: MiniDiaryJson = JSON.parse(jsonStr);
	const parsedEntries = Object.entries(parsedJson.entries).map(
		([indexDate, entry]): ListDiaryEntry => ({ ...entry, indexDate }),
	);
	const now = new Date().toString();

	return buildEntries(parsedEntries, (parsedEntry: ImportEntry): {
		indexDate: string;
		entry: DiaryEntry;
	} => {
		const parsedEntryCast = parsedEntry as ListDiaryEntry;
		const { indexDate, text, title } = parsedEntryCast;

		// Use dateUpdated if defined, otherwise set it to now
		let dateUpdated;
		if ("dateUpdated" in parsedEntryCast) {
			dateUpdated = new Date(parsedEntryCast.dateUpdated).toString();
		} else {
			dateUpdated = now;
		}

		const entry = { dateUpdated, title: title.trim(), text: text.trim() };
		return { indexDate, entry };
	});
}
