import { createContext, useContext } from 'react';

const FirebaseContext = createContext({});

const FirebaseProvider = ({ children }) => {
	return (
		<FirebaseContext.Provider value={value}>
			{children}
		</FirebaseContext.Provider>
	);
};

export const useFirebase = () => useContext(FirebaseContext);
export default FirebaseProvider;
