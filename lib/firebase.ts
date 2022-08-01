import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

export const signUp = (email: string, password: string) => {
	return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email: string, password: string) => {
	return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
	return signOut(auth);
};

export const useAuth = () => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		return onAuthStateChanged(auth, (user: any) => setCurrentUser(user));
	}, []);

	return currentUser;
};
