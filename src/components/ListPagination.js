import React from "react";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

var _ = require('lodash')

const ListPagination = ({ activePage, itemsCount, itemsPerPage, handlePageChange}) => {

	const totalPages = Math.ceil(Math.max(itemsCount, 10) / itemsPerPage);

	const renderPagination = _.range(1, totalPages + 1).map(pageNumber => {
		return (
			<PaginationItem
				key={pageNumber}
				onClick={() => handlePageChange(pageNumber)}
				active={pageNumber === activePage}
			>
				<PaginationLink>{pageNumber}</PaginationLink>
			</PaginationItem>
		);
	});

	return (
		<Pagination>
			<PaginationItem>
				<PaginationLink
					previous
					onClick={() =>
						handlePageChange(
							Math.min(
								Math.max(activePage - 1, 1),
								totalPages - 1
							)
						)
					}
				/>
			</PaginationItem>
			{renderPagination}
			<PaginationItem>
				<PaginationLink
					next
					onClick={() =>
						handlePageChange(
							Math.min(
								Math.max(activePage + 1, 1),
								totalPages - 1
							)
						)
					}
				/>
			</PaginationItem>
		</Pagination>
	);
};

export default ListPagination;
