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

	const rows = data.map((item) => {
		return (
			<tr key={item.id}>
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
					<th>Title</th>
					<th>Company</th>
					<th>Salary</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</Table>
	);
}
