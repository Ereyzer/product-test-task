// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA8-CytSACxJjTP1ffd3D4LXYGLCDgDD9o',
  authDomain: 'myproject-ivan.firebaseapp.com',
  databaseURL:
    'https://myproject-ivan-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'myproject-ivan',
  storageBucket: 'myproject-ivan.appspot.com',
  messagingSenderId: '696383857388',
  appId: '1:696383857388:web:d1882421c6272162b7bbc9',
  measurementId: 'G-JPVGKR2TGR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
