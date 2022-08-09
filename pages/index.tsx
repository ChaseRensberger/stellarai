import { createStyles, Stack } from '@mantine/core';
import type { NextPage } from 'next';
import { DropzoneButton } from '../components/profile/Dropzone';
import { UserInfoIcons } from '../components/profile/UserInfo';

const Profile: NextPage = () => {
	const { classes } = useStyles();

	return (
		<main>
			<Stack align={'center'} spacing="xl">
				<h1>Good Morning!</h1>
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
