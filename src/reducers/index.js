import { combineReducers } from "redux";

const eventsById = (state = {}, action) => {
	if (action.response) {
		return {
			...state,
			...action.response.entities.events
		};
	}
	return state;
};

const allEvents = (state = [], action) => {
	switch (action.type) {
		case "FETCH_EVENTS_SUCCESS":
			return action.response.result;
		case "ADD_EVENT_SUCCESS":
			return state.concat(action.response.result);
		case "DELETE_EVENT_SUCCESS":
			return state.filter(id => id !== action.response.result);
		default:
			return state;
	}
};

const eventFilter = (state = "", action) => {
	switch (action.type) {
		case "SEARCH_EVENT":
			return action.filter;
		default:
			return state;
	}
};

const isFetching = (state = false, action) => {
	switch (action.type) {
		case "FETCH_EVENTS_REQUEST":
		case "ADD_EVENT_REQUEST":
		case "DELETE_EVENT_REQUEST":
			return true;
		case "FETCH_EVENTS_SUCCESS":
		case "FETCH_EVENTS_ERROR":
		case "ADD_EVENT_SUCCESS":
		case "ADD_EVENT_ERROR":
		case "DELTE_EVENT_SUCCESS":
		case "DELETE_EVENT_ERROR":
			return false;
		default:
			return state;
	}
};

const errorMessage = (state = "", action) => {
	switch (action.type) {
		case "FETCH_EVENTS_ERROR":
			return action.message;
		default:
			return state;
	}
};

export const events = combineReducers({
	byId: eventsById,
	allIds: allEvents,
	filter: eventFilter,
	isFetching: isFetching,
	errorMessage: errorMessage
});

const getEvents = state => {
	return state.allIds.map(id => state.byId[id]);
};

export const getFilteredEvents = state => {
	if (state.filter === "") {
		return getEvents(state);
	}
	return getEvents(state).filter(
		event => 
			event.name.search(state.filter) !== -1 ||
			event.date.search(state.filter) !== -1 ||
			event.place.search(state.filter) !== -1 ||
			event.description.search(state.filter) !== -1
	);
};

export const getFilter = state => {
	return state.filter;
};

export const getIsFetching = state => {
	return state.isFetching;
};

export const getErrorMessage = state => {
	return state.errorMessage;
};
