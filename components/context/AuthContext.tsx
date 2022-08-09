import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
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

	const signup = (email: string, password: string) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		signup,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
