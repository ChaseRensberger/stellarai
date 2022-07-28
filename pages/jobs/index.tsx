import { Container, createStyles } from '@mantine/core';
import type { NextPage } from 'next';

const Jobs: NextPage = () => {
	const { classes, cx } = useStyles();

	return (
		<main>
			<Container className={classes.pageElem}></Container>
		</main>
	);
};

const useStyles = createStyles((theme) => ({
	pageElem: {
		height: '100vh',
		marginBottom: '40vh',
		backgroundColor: 'black',
	},
}));

export default Jobs;
