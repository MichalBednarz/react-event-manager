import * as api from "../api";
import { normalize } from "normalizr";
import * as schema from "./schema";

export const fetchEvents = () => dispatch => {
	dispatch({
		type: "FETCH_EVENTS_REQUEST"
	});

	return api.fetchEvents().then(
		response => {
			dispatch({
				type: "FETCH_EVENTS_SUCCESS",
				response: normalize(response, schema.arrayOfEvents)
			});
		},
		error => {
			dispatch({
				type: "FETCH_EVENTS_ERROR",
				message: error.message
			});
		}
	);
};

export const addEvent = (payload) => dispatch => {
	dispatch({
		type: "ADD_EVENT_REQUEST"
	});

	return api.addEvent(payload).then(
		response => {
			dispatch({
				type: "ADD_EVENT_SUCCESS",
				response: normalize(response, schema.event)
			});
		},
		error => {
			dispatch({
				type: "ADD_EVENT_ERROR",
				message: error.message
			});
		}
	);
};

export const updateEvent = (id, payload) => dispatch => {
	dispatch({
		type: "UPDATE_EVENT_REQUEST",
	});

	return api.updateEvent(id, payload).then(
		response => {
			dispatch({
				type: "UPDATE_EVENT_SUCCESS",
				response: normalize(response, schema.event)
			});
		},
		error => {
			dispatch({
				type: "UPDATE_EVENT_ERROR",
				message: error.message
			});
		}
	);
};

export const deleteEvent = id => dispatch => {
	dispatch({
		type: "DELETE_EVENT_REQUEST",
	});

	return api.deleteEvent(id).then(
		response => {
			dispatch({
				type: "DELETE_EVENT_SUCCESS",
				response: normalize(response, schema.event)
			});
		},
		error => {
			dispatch({
				type: "DELETE_EVENT_ERROR",
				message: error.message
			});
		}
	);
};
