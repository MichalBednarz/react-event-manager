import React from "react";
import { Button } from "reactstrap";
import InlineEditable from "react-inline-editable-field";

const ListRow = ({ event, index, handleDelete, handleUpdate }) => (
	<tr key={index}>
		<td>
			<InlineEditable
				content={event.name}
				inputType="text"
				displayPlaceholder="name"
				onBlur={(val, isChanged) => {
					handleUpdate(isChanged, event.id, {
						name: val,
						date: event.date,
						place: event.place,
						description: event.description
					});
				}}
			/>
		</td>
		<td>
			<InlineEditable
				content={event.date}
				inputType="date"
				displayPlaceholder="yyyy/mm/dd"
				onBlur={(val, isChanged) => {
					handleUpdate(isChanged, event.id, {
						name: event.name,
						date: val,
						place: event.place,
						description: event.description
					});
				}}
			/>
		</td>
		<td>
			<InlineEditable
				content={event.place}
				inputType="text"
				displayPlaceholder="place"
				onBlur={(val, isChanged) => {
					handleUpdate(isChanged, event.id, {
						name: event.name,
						date: event.date,
						place: val,
						description: event.description
					});
				}}
			/>
		</td>
		<td>
			<InlineEditable
				content={event.description}
				inputType="text"
				displayPlaceholder="description"
				onBlur={(val, isChanged) => {
					handleUpdate(isChanged, event.id, {
						name: event.name,
						date: event.date,
						place: event.place,
						description: val
					});
				}}
			/>
		</td>
		<td align="center">
			<Button color="danger" onClick={e => handleDelete(e, event.id)}>
				Delete
			</Button>
		</td>
	</tr>
);

export default ListRow;
