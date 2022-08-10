import {
	createStyles,
	Container,
	Grid,
	Box,
	SimpleGrid,
	useMantineTheme,
	Skeleton,
} from '@mantine/core';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { DropzoneButton } from '../components/profile/Dropzone';
import { UserInfoIcons } from '../components/profile/UserInfo';

const Profile: NextPage = () => {
	const { classes } = useStyles();
	const PRIMARY_COL_HEIGHT = 600;
	const theme = useMantineTheme();
	const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

	return (
		<Container size={'xl'}>
			<SimpleGrid
				cols={2}
				spacing="md"
				breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
			>
				<Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
				<Grid gutter="md">
					<Grid.Col>
						<Skeleton
							height={SECONDARY_COL_HEIGHT}
							radius="md"
							animate={false}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<Skeleton
							height={SECONDARY_COL_HEIGHT}
							radius="md"
							animate={false}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<Skeleton
							height={SECONDARY_COL_HEIGHT}
							radius="md"
							animate={false}
						/>
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
