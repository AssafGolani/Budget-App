import { initializeApp } from 'firebase/app';
import { get, getDatabase, onValue, ref, remove, set, update, push, onChildRemoved, onChildChanged, onChildAdded } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzdUNaMSEl-2keBSo-3XZ2BGcxtBvTu9M",
  authDomain: "budget-app-94284.firebaseapp.com",
  databaseURL: "https://budget-app-94284-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "budget-app-94284",
  storageBucket: "budget-app-94284.appspot.com",
  messagingSenderId: "905651083029",
  appId: "1:905651083029:web:78a82c35b483edc8cabb1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const notesRef = ref(db, 'Expenses');

// onremovechild listener
onChildRemoved(notesRef, (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// onchildchanged listener
onChildChanged(notesRef, (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// onchildadded listener
onChildAdded(notesRef, (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// get data once
// get(notesRef).then((snapshot) => {
//   console.log(snapshot.val())
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

export default db;
