import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
	TextInput,
	PasswordInput,
	Text,
	Paper,
	Group,
	PaperProps,
	Button,
	Divider,
	Checkbox,
	Anchor,
	Stack,
	createStyles,
} from '@mantine/core';
import { GithubButton, TwitterButton } from '../../components/SocialButtons';

const useStyles = createStyles((theme) => ({
	pageWrapper: {
		height: '100%',
		flexDirection: 'column',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	paper: {
		width: '40%',
		marginBottom: '10%',
	},
}));

const Hero = (props: PaperProps) => {
	const [type, toggle] = useToggle(['Login', 'Register']);
	const { classes } = useStyles();
	const form = useForm({
		initialValues: {
			email: '',
			name: '',
			password: '',
			terms: true,
		},

		validate: {
			email: (val) => /^\S+@\S+$/.test(val) && 'Invalid email',
			password: (val) =>
				val.length >= 6 && 'Password should include at least 6 characters',
		},
	});

	return (
		<div className={classes.pageWrapper}>
			<h1>Welcome to StellarAI</h1>
			<Paper className={classes.paper} radius="md" p="xl" withBorder {...props}>
				<Text size="lg" weight={500} align="center">
					{type} with
				</Text>

				<Group grow mb="md" mt="md">
					<GithubButton radius="xl">GitHub</GithubButton>
					<TwitterButton radius="xl">Twitter</TwitterButton>
				</Group>

				<Divider
					label="Or continue with email"
					labelPosition="center"
					my="lg"
				/>

				<form onSubmit={form.onSubmit(() => {})}>
					<Stack>
						{type === 'register' && (
							<TextInput
								label="Name"
								placeholder="Your name"
								value={form.values.name}
								onChange={(event) =>
									form.setFieldValue('name', event.currentTarget.value)
								}
							/>
						)}

						<TextInput
							required
							label="Email"
							placeholder="hello@mantine.dev"
							value={form.values.email}
							onChange={(event) =>
								form.setFieldValue('email', event.currentTarget.value)
							}
							error={form.errors.email && 'Invalid email'}
						/>

						<PasswordInput
							required
							label="Password"
							placeholder="Your password"
							value={form.values.password}
							onChange={(event) =>
								form.setFieldValue('password', event.currentTarget.value)
							}
							error={
								form.errors.password &&
								'Password should include at least 6 characters'
							}
						/>

						{type === 'register' && (
							<Checkbox
								label="I accept terms and conditions"
								checked={form.values.terms}
								onChange={(event) =>
									form.setFieldValue('terms', event.currentTarget.checked)
								}
							/>
						)}
					</Stack>

					<Group position="apart" mt="xl">
						<Anchor
							component="button"
							type="button"
							color="dimmed"
							onClick={() => toggle()}
							size="xs"
						>
							{type === 'register'
								? 'Already have an account? Login'
								: "Don't have an account? Register"}
						</Anchor>
						<Button type="submit">{upperFirst(type)}</Button>
					</Group>
				</form>
			</Paper>
		</div>
	);
};

export default Hero;
