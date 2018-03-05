import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Input } from "reactstrap";
import * as actions from "../actions";
class EventForm extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		event.preventDefault();
		const { addEvent } = this.props;
		const payload = {
			name: event.target.name.value,
			place: event.target.place.value,
			date: event.target.date.value,
			description: event.target.description.value
		};

 		addEvent(payload);
	}

	render() {
		return (
			<Form inline onSubmit={this.handleSubmit}>
				<FormGroup>
					<Input
						type="text"
						name="name"
						id="eventName"
						placeholder="name"
					/>
				</FormGroup>
				<FormGroup>
					<Input
						type="text"
						name="place"
						id="eventPlace"
						placeholder="place"
					/>
				</FormGroup>
				<FormGroup>
					<Input
						type="date"
						name="date"
						id="eventDate"
						placeholder="yyyy/mm/dd"
					/>
				</FormGroup>
				<FormGroup>
					<Input
						type="text"
						name="description"
						id="eventDescription"
						placeholder="description"
					/>
				</FormGroup>
				<Button type="submit" color="primary">
					Add
				</Button>
			</Form>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addEvent(payload) {
			dispatch(actions.addEvent(payload));
		}
	};
};

EventForm = connect(null, mapDispatchToProps)(EventForm);

export default EventForm;
