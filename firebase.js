import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore'
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth'
// import { getDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCOdci3JLHW1dP7gnNhiDkz21-4Bj5yA8E',
  authDomain: 'signal-clone-43b2a.firebaseapp.com',
  projectId: 'signal-clone-43b2a',
  storageBucket: 'signal-clone-43b2a.appspot.com',
  messagingSenderId: '860558848994',
  appId: '1:860558848994:web:c37b7d037e733e822c7fbb',
  measurementId: 'G-R88WMCCF6S',
}

if (!getApps().length) initializeApp(firebaseConfig)

export {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  collection,
  addDoc,
  getFirestore,
  onSnapshot
}
