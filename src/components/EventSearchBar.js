import React, { Component } from "react";
import { Input, FormGroup, Form } from "reactstrap";
import { connect } from "react-redux";

class EventSearchBar extends Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit(event) {
		event.preventDefault();
		const { searchEvent } = this.props;
		searchEvent(event.target.searchPhrase.value)

	}

	render() {
		return (
			<Form inline onSubmit={this.handleSubmit}>
				<FormGroup controlid="formBasicText">
					<Input
						type="text"
						name="searchPhrase"
						placeholder="Search phrase..."
					/>
				</FormGroup>
			</Form>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		searchEvent(filter) {
			dispatch({
				type: "SEARCH_EVENT",
				filter
			})
		}
	}
}

EventSearchBar = connect(null, mapDispatchToProps)(EventSearchBar);

export default EventSearchBar;
