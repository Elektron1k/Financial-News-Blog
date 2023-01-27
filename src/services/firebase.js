// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAEt4OnK2zNu9RHq8UiE6aOfT89dKz9siA',
  authDomain: 'financial-news-blog.firebaseapp.com',
  projectId: 'financial-news-blog',
  storageBucket: 'financial-news-blog.appspot.com',
  messagingSenderId: '162717102895',
  appId: '1:162717102895:web:133a501681bff04a6fa7da',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
