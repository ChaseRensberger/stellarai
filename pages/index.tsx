import { createStyles } from '@mantine/core';
import type { NextPage } from 'next';
import router from 'next/router';
import { useEffect } from 'react';
import { UserInfoIcons } from '../components/UserInfo';
import { useAuth } from '../lib/firebase';

const Profile: NextPage = () => {
	const { classes } = useStyles();

	return (
		<main>
			<div className={classes.pageWrapper}>
				<h1>Good Morning!</h1>
				<UserInfoIcons
					avatar={''}
					name={'John Smith'}
					title={'Software Engineer'}
					phone={'012-345-6789'}
					email={'email@email.com'}
				/>
			</div>
		</main>
	);
};

const useStyles = createStyles((theme) => ({
	pageWrapper: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

export default Profile;
