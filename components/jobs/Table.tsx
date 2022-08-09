import { useState } from 'react';
import {
	createStyles,
	Table,
	Checkbox,
	ScrollArea,
	Group,
	Text,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
	rowSelected: {
		backgroundColor:
			theme.colorScheme === 'dark'
				? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
				: theme.colors[theme.primaryColor][0],
	},
}));

interface TableSelectionProps {
	data: {
		title: string;
		company: string;
		salary: string;
		id: string;
	}[];
}

export function TableSelection({ data }: TableSelectionProps) {
	const { classes, cx } = useStyles();
	const [selection, setSelection] = useState(['1']);
	const toggleRow = (id: string) =>
		setSelection((current) =>
			current.includes(id)
				? current.filter((item) => item !== id)
				: [...current, id]
		);
	const toggleAll = () =>
		setSelection((current) =>
			current.length === data.length ? [] : data.map((item) => item.id)
		);

	const rows = data.map((item) => {
		const selected = selection.includes(item.id);
		return (
			<tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
				<td>
					<Checkbox
						checked={selection.includes(item.id)}
						onChange={() => toggleRow(item.id)}
						transitionDuration={0}
					/>
				</td>
				<td>
					<Group spacing="sm">
						<Text size="sm" weight={500}>
							{item.title}
						</Text>
					</Group>
				</td>
				<td>{item.company}</td>
				<td>{item.salary}</td>
			</tr>
		);
	});

	return (
		<Table verticalSpacing="sm">
			<thead>
				<tr>
					<th style={{ width: 40 }}>
						<Checkbox
							onChange={toggleAll}
							checked={selection.length === data.length}
							indeterminate={
								selection.length > 0 && selection.length !== data.length
							}
							transitionDuration={0}
						/>
					</th>
					<th>Title</th>
					<th>Company</th>
					<th>Salary</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</Table>
	);
}