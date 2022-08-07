import { createStyles } from '@mantine/core';
import type { NextPage } from 'next';

const Jobs: NextPage = () => {
	return <main>Jobs</main>;
};

const useStyles = createStyles((theme) => ({
	pageElem: {
		height: '100vh',
		marginBottom: '40vh',
		backgroundColor: 'black',
	},
}));

export default Jobs;
