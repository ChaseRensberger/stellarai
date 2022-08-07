import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export function getEnvironment() {
	return {
		firebase: {
			apiKey: String(process.env.NEXT_PUBLIC_API_KEY),
			authDomain: String(process.env.NEXT_PUBLIC_AUTH_DOMAIN),
			databaseURL: String(process.env.NEXT_PUBLIC_DATABASE_URL),
			projectId: String(process.env.NEXT_PUBLIC_PROJECT_ID),
			storageBucket: String(process.env.NEXT_PUBLIC_STORAGE_BUCKET),
			messagingSenderId: String(process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID),
			appId: String(process.env.NEXT_PUBLIC_APP_ID),
		},
		baseURL: String(process.env.NEXT_PUBLIC_BASE_URL),
	};
}

const config = getEnvironment();
const app = initializeApp(config.firebase);
const auth = getAuth(app);

export { auth };
