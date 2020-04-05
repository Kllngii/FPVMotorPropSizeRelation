import {
	DiaryAction,
	DiaryState,
	SET_DATE_SELECTED,
	SET_SEARCH_KEY,
	SET_SEARCH_RESULTS,
} from "./types";

const today = new Date();

const initialState: DiaryState = {
	dateSelected: today,
	monthSelected: today,
	searchKey: "",
	searchResults: [],
};

function diaryReducer(state = initialState, action: DiaryAction): DiaryState {
	switch (action.type) {
		case SET_DATE_SELECTED: {
			return {
				...state,
				dateSelected: action.payload.dateSelected,
				monthSelected: action.payload.dateSelected,
			};
		}
		case SET_SEARCH_KEY: {
			return {
				...state,
				searchKey: action.payload.searchKey,
			};
		}
		case SET_SEARCH_RESULTS: {
			return {
				...state,
				searchResults: action.payload.searchResults,
			};
		}
		default:
			return state;
	}
}

export default diaryReducer;
