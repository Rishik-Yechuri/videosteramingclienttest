const { initializeApp } = require('firebase/app');
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const { getAuth, signInWithEmailAndPassword,signInAnonymously } = require('firebase/auth');


const firebaseConfig = {
    apiKey: 'AIzaSyDf-zcmQxzLO1vq1zyWfokwqEJ3c_gNubI',
    authDomain: 'videostreaming-3845.firebaseapp.com',
    projectId: 'videostreaming-3845',
    storageBucket: 'videostreaming-3845.appspot.com',
    messagingSenderId: '556024614451',
    appId: '1:556024614451:web:cc919b51489b2adc04dd46',
    measurementId: 'G-NLWLQM4PTV',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function hi() {
    try {
        const email = 'quit699@gmail.com';
        const password = 'SuperL8O#@#ngPass3Ord';

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const idToken = await userCredential.user.getIdToken();
         console.log('ID token:', idToken);
        // Create user
       // const userCredential = await getAuth().signInWithEmailAndPassword(auth, email, password);
        //console.log('User created:', userCredential.user.uid);

        // Get ID token
      //  const idToken = await userCredential.user.getIdToken();
      //  console.log('ID token:', idToken);
    } catch (error) {
        console.log('Error:', error);
    }
}

async function getAnonToken() {
    try {
        const userCredential = await signInAnonymously(auth);
        const idToken = await userCredential.user.getIdToken();
        console.log('Anonymous ID token:', idToken);
    } catch (error) {
        console.log('Error:', error);
    }
}

getAnonToken().then(() => {
    console.log('done');
});