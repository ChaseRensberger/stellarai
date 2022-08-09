import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBUu-PEDlBG3DPJ7YrM1bvl__wP4l9VEjw',
	authDomain: 'stellarai-60df0.firebaseapp.com',
	projectId: 'stellarai-60df0',
	storageBucket: 'stellarai-60df0.appspot.com',
	messagingSenderId: '473227712166',
	appId: '1:473227712166:web:3f88f3827c7adb72334667',
	measurementId: 'G-GM3F6J1Z8E',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
