import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	User,
} from 'firebase/auth';
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { auth } from '../../config/firebase';

const AuthContext = createContext({} as any);

interface AuthProps {
	children?: ReactNode;
}

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProps) => {
	const [currentUser, setCurrentUser] = useState<User | null>();
	const [loading, setLoading] = useState<boolean>(true);

	const signUpUser = (email: string, password: string) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signInUser = (email: string, password: string) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const signOutUser = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe; // come back
	}, []);

	const value = {
		currentUser,
		signUpUser,
		signInUser,
		signOutUser,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
