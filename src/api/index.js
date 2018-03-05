const ROOT_URL = "http://localhost:8000/api";

export const fetchEvents = () => {
	return fetch(`${ROOT_URL}/events/`)
		.then(sleeper(1000))
		.then(response => response.json());
};

export const addEvent = payload => {
	return fetch(`${ROOT_URL}/events`, {
		method: "POST",
		headers: new Headers({
			"Content-Type": "application/json"
		}),
		body: JSON.stringify({
			...payload
		})
	}).then(response => response.json());
};

export const updateEvent = (id, payload) => {
	return fetch(`${ROOT_URL}/events/${id}`, {
		method: "PUT",
		headers: new Headers({
			"Content-Type": "application/json"
		}),
		body: JSON.stringify({
			...payload
		})
	}).then(response => response.json());
};

export const deleteEvent = id => {
	return fetch(`${ROOT_URL}/events/${id}`, {
		method: "DELETE",
		headers: new Headers({
			"Content-Type": "application/json"
		})
	}).then(response => response.json());
};

function sleeper(ms) {
	return function(x) {
		return new Promise(resolve => setTimeout(() => resolve(x), ms));
	};
}
