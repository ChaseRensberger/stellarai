import { Container, createStyles } from '@mantine/core';
import type { NextPage } from 'next';
import router from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../../lib/firebase';

const Jobs: NextPage = () => {
	const { classes } = useStyles();
	const currentUser = useAuth();

	useEffect(() => {
		if (!currentUser) {
			router.push('/enter');
		}
	}, [currentUser]);

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
