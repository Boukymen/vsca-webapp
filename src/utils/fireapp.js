import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

import.meta.env.SOME_VALUE

const firebaseConfig = {
	apiKey: import.meta.env.VITE_APP_FR_KEY,
	databaseURL: import.meta.env.VITE_APP_FR_URL,
	authDomain: import.meta.env.VITE_APP_FR_DOMAIN,
	projectId: import.meta.env.VITE_APP_FR_ID,
	storageBucket: import.meta.env.VITE_APP_FR_BUCKET,
	messagingSenderId: import.meta.env.VITE_APP_FR_MSG_ID,
	appId: import.meta.env.VITE_APP_FR_APP_ID
}

console.log(firebaseConfig)

const fireapp = firebase.initializeApp(firebaseConfig);
//const firebase = firebaseApp.auth();
firebase.auth()
export default fireapp;
