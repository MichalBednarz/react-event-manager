import React, { Component } from "react";
import { Table } from "reactstrap";
import ListPagination from "./ListPagination";
import ListRow from "./ListRow";

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage: 1,
			itemsCount: props.events.length,
			itemsPerPage: 10
		};
		this.handlePageChange = this.handlePageChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ itemsCount: nextProps.events.length})
	}

	handlePageChange(page) {
		this.setState({ activePage: page });
	}

	getCurrentEvents(events) {
		const { activePage, itemsPerPage } = this.state;

		const indexOfLastEvent = activePage * itemsPerPage;
		const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;
		const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

		return currentEvents;
	}

	render() {
		const { events } = this.props;

		return (
			<div>
				<Table striped>
					<thead>
						<tr>
							<th>Name</th>
							<th>Date</th>
							<th>Place</th>
							<th>Description</th>
							<th style={{ textAlign: "center" }}>Actions</th>
						</tr>
					</thead>
					<tbody>
						{this.getCurrentEvents(events).map(event => (
							<ListRow
								event={event}
								key={event.id}
								handleDelete={this.props.handleDelete}
								handleUpdate={this.props.handleUpdate}
							/>
						))}
					</tbody>
				</Table>
				<ListPagination
					{...this.state}
					handlePageChange={this.handlePageChange}
				/>
			</div>
		);
	}
}

export default List;
