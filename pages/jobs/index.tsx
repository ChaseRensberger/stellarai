import {
	createStyles,
	Pagination,
	Stack,
	Divider,
	Text,
	Group,
	Select,
	Container,
	RangeSlider,
} from '@mantine/core';
import type { NextPage } from 'next';
import { data } from '../../components/jobs/MockTableData';
import { TableSelection } from '../../components/jobs/Table';

const Jobs: NextPage = () => {
	const { classes } = useStyles();

	return (
		<Stack align={'center'}>
			<Group align={'center'} position={'apart'} sx={{ width: '100%' }}>
				<Select
					style={{ zIndex: 2 }}
					data={['Engineer', 'Analyst', 'Recruiter']}
					placeholder="Pick one"
					label="Filter by role"
				/>
				<Pagination total={10} withEdges sx={{ marginTop: '1.4%' }} />
			</Group>
			<Divider my="sm" variant="dashed" sx={{ width: '100%' }} />
			<TableSelection data={data} />
		</Stack>
	);
};

const useStyles = createStyles((theme) => ({
	filterGroup: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '60%',
	},
}));

export default Jobs;
