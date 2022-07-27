import type { NextPage } from 'next';
import { HeaderSimple } from '../components/SHeader';

const Profile: NextPage = () => {
	return (
		<main>
			<HeaderSimple
				links={[
					{ link: 'profile', label: 'Profile' },
					{ link: 'jobs', label: 'Jobs' },
				]}
			/>
		</main>
	);
};

export default Profile;
