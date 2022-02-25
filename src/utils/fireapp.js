import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: "AIzaSyAeLYb4BU7j7e84DXbtbvwpPTiYukvorjg",
	databaseURL: "https://vscodeactivity-default-rtdb.firebaseio.com/",
	authDomain: "vscodeactivity.firebaseapp.com",
	projectId: "vscodeactivity",
	storageBucket: "vscodeactivity.appspot.com",
	messagingSenderId: "741151793284",
	appId: "1:741151793284:web:759a1e43886d6957f322d1"
}

const fireapp = firebase.initializeApp(firebaseConfig);
//const firebase = firebaseApp.auth();
firebase.auth()
export default fireapp;
