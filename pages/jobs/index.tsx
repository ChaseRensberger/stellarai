import { createStyles, Pagination, Stack, Divider, Text } from '@mantine/core';
import type { NextPage } from 'next';
import { data } from '../../components/jobs/MockTableData';
import { TableSelection } from '../../components/jobs/Table';

const Jobs: NextPage = () => {
	const { classes } = useStyles();

	return (
		<Stack align={'center'}>
			<Text weight={700} size={'xl'} align={'center'}>
				Welcome to StellarAI Jobs!
			</Text>
			<Text weight={700} size={'lg'} align={'center'}>
				After completeing your profile, you can come here to find jobs that are
				the best fit for you.
			</Text>
			<Divider my="sm" variant="dashed" sx={{ width: '100%' }} />
			<Pagination total={10} withEdges />
			<Divider my="sm" variant="dashed" sx={{ width: '100%' }} />
			<TableSelection data={data} />
		</Stack>
	);
};

const useStyles = createStyles((theme) => ({
	pageWrapper: {
		width: '100vw',
	},
}));

export default Jobs;
