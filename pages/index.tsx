import {
	createStyles,
	Container,
	Grid,
	Avatar,
	SimpleGrid,
	useMantineTheme,
	Card,
	Stack,
	Text,
	Divider,
	Space,
	Button,
} from '@mantine/core';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { DropzoneButton } from '../components/profile/Dropzone';
import { UserInfoIcons } from '../components/profile/UserInfo';
import { StatsRing } from '../components/profile/Stats';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

const Profile: NextPage = () => {
	const { classes } = useStyles();

	return (
		<Container size={'xl'}>
			<SimpleGrid
				cols={2}
				spacing="md"
				breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
			>
				<Card shadow="md">
					<Stack align={'center'} spacing={'xs'}>
						<Avatar size={'xl'} radius={'xl'} />
						<Text weight={700} size={'xl'}>
							FirstName LastName
						</Text>
						<Text weight={400} size={'md'}>
							Software Engineer at Company
						</Text>
					</Stack>
				</Card>
				<Grid gutter="md">
					<Grid.Col>
						<Card shadow="md">
							<DropzoneButton />
						</Card>
					</Grid.Col>
					<Grid.Col span={12}>
						<Card shadow="md">
							<StatsRing
								data={[
									{
										label: "Comparison's Made",
										stats: '200',
										progress: 80,
										color: 'green',
										icon: 'up',
									},
									{
										label: "Comparison's Madee",
										stats: '200',
										progress: 80,
										color: 'green',
										icon: 'up',
									},
									{
										label: "Comparison's Madeee",
										stats: '200',
										progress: 80,
										color: 'green',
										icon: 'up',
									},
								]}
							/>
						</Card>
					</Grid.Col>
				</Grid>
			</SimpleGrid>
		</Container>
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
