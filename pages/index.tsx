import { createStyles, Stack } from '@mantine/core';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { DropzoneButton } from '../components/profile/Dropzone';
import { UserInfoIcons } from '../components/profile/UserInfo';

const Profile: NextPage = () => {
	const { classes } = useStyles();
	const myDate = new Date();
	const [greet, setGreet] = useState('');
	useEffect(() => {
		let hrs = myDate.getHours();
		if (hrs < 12) setGreet('Good Morning');
		else if (hrs >= 12 && hrs <= 17) setGreet('Good Afternoon');
		else if (hrs >= 17 && hrs <= 24) setGreet('Good Evening');
	}, []);

	return (
		<main>
			<Stack align={'center'} spacing="xl">
				<h1>{greet}</h1>
				<UserInfoIcons
					avatar={''}
					name={'John Smith'}
					title={'Software Engineer'}
					phone={'012-345-6789'}
					email={'email@email.com'}
				/>
				<DropzoneButton />
			</Stack>
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
