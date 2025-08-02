import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
	apiKey: "AIzaSyCxtNshksu7KG1H619cNhPByZEYGFwhoAk",
	authDomain: "fir-test-7c1a3.firebaseapp.com",
	projectId: "fir-test-7c1a3",
	storageBucket: "fir-test-7c1a3.firebasestorage.app",
	messagingSenderId: "1054522096634",
	appId: "1:1054522096634:web:63bdc68db235c759cfc243",
	databaseURL: 'https://fir-test-7c1a3-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
