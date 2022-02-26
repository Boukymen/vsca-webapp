import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: process.env["REACT_APP_FR_KEY"],
	databaseURL: process.env["REACT_APP_FR_URL"],
	authDomain: process.env["REACT_APP_FR_DOMAIN"],
	projectId: process.env["REACT_APP_FR_ID"],
	storageBucket: process.env["REACT_APP_FR_BUCKET"],
	messagingSenderId: process.env["REACT_APP_FR_MSG_ID"],
	appId: process.env["REACT_APP_FR_APP_ID"]
}

console.log(firebaseConfig)

const fireapp = firebase.initializeApp(firebaseConfig);
//const firebase = firebaseApp.auth();
firebase.auth()
export default fireapp;
