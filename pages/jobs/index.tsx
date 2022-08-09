import { createStyles, Pagination, Stack } from '@mantine/core';
import type { NextPage } from 'next';
import { data } from '../../components/jobs/MockTableData';
import { TableSelection } from '../../components/jobs/Table';

const Jobs: NextPage = () => {
	const { classes } = useStyles();

	return (
		<Stack align={'center'}>
			<TableSelection data={data} />
			<Pagination total={10} withEdges />
		</Stack>
	);
};

const useStyles = createStyles((theme) => ({
	pageWrapper: {
		width: '100vw',
	},
}));

export default Jobs;
