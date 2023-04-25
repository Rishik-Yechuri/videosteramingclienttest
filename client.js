const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');


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
        const email = 'quit@gmail.com';
        const password = 'quitNow2#$21UiJ';

        // Create user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User created:', userCredential.user.uid);

        // Get ID token
        const idToken = await userCredential.user.getIdToken();
        console.log('ID token:', idToken);
    } catch (error) {
        console.log('Error:', error);
    }
}

hi().then(() => {
    console.log('done');
});