import React, { Component } from "react";
import { connect } from "react-redux";
import {
	getFilteredEvents,
	getIsFetching,
	getErrorMessage
} from "../reducers";
import * as actions from "../actions";
import List from "../components/List";
import OverlayLoader from "react-loading-indicator-overlay/lib/OverlayLoader";
import "../styles/EventList.css"

class EventList extends Component {
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		const { fetchEvents } = this.props;
		fetchEvents();
	}

	handleDelete(e, id) {
		e.preventDefault();
		const { deleteEvent } = this.props;
		deleteEvent(id);
	}

	handleUpdate(isChanged, id, payload) {
		if (isChanged) {
			const { updateEvent } = this.props;
			updateEvent(id, payload);
		}
	}

	render() {
		const { events, isFetching, message } = this.props;

		if (isFetching && !events.length) {
			return (
				<div className="loader-container">
					<OverlayLoader
						color={"red"}
						loader="ScaleLoader"
						text="Loading..."
						active={true}
						backgroundColor={"black"}
						opacity=".9"
					/>
				</div>
			);
		}

		if (message && !events.length) {
			return <p>{message}</p>;
		}
		return (
				<List
					events={events}
					handleDelete={this.handleDelete}
					handleUpdate={this.handleUpdate}
				/>
		);
	}
}

const mapStateToProps = state => {
	return {
		events: getFilteredEvents(state),
		isFetching: getIsFetching(state),
		message: getErrorMessage(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchEvents() {
			dispatch(actions.fetchEvents());
		},
		deleteEvent(id) {
			dispatch(actions.deleteEvent(id));
		},
		updateEvent(id, payload) {
			dispatch(actions.updateEvent(id, payload));
		}
	};
};

EventList = connect(mapStateToProps, mapDispatchToProps)(EventList);

export default EventList;
