import {initializeApp} from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDnuQQ_f3qsIlHZxacPgLYrefQJ3cTP45A",
  authDomain: "mmpmmp0608.firebaseapp.com",
  databaseURL: "https://mmpmmp0dfdf608-default-rtdb.firebaseio.com",  
  projectId: "mmpmmp0608",
  storageBucket: "mmpmmp0608.firebasestorage.app",
  messagingSenderId: "326678963585",
  appId: "1:326678963585:web:5f0274c7117bac43783480",
  measurementId: "G-8TZCP1K2WM"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {app, database};