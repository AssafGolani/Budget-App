/**
 * // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// const dbRef = ref(db, 'notes');

// set(dbRef, 'notes').p

const firebaseArrayItems = {
  description: 'Water bill for the month of July',
  note: 'Water bill',
  amount: 4500,
  createdAt: 1627776000000
}

//*********** IMPORTANT CHEATSHEET ********/

/* add item to array */
// const notesRef = ref(db, 'Expenses');
// const newNoteRef = push(notesRef);
// set(newNoteRef, firebaseArrayItems)

// update the body of the note with key -NouW0jiZC9xsFdcAFEl
// update(ref(db, 'notes/-NouW0jiZC9xsFdcAFEl'), {
//   body: 'Buy food'
// });

// remove the item with key -NouW0jiZC9xsFdcAFEl
// remove(ref(db, 'notes/-NouW0jiZC9xsFdcAFEl'));

// remove listener for child from expenses array using 'child_removed'
// onChildRemoved(notesRef, (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

// listener for child changed 
// onChildChanged(notesRef, (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

// listener to child added
// onChildAdded(notesRef, (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });


//extract once the data from the Expenses array
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

// listen to changes in the Expenses array
// onValue(notesRef, (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });



// update(-NoqCAz0OOJRWT5wEvwl + '/-NoqCAz0OOJRWT5wEvwl', {
//   title: 'New title',
//   body: 'New body'
// });

// set(dbRef, notes)

// onValue(dbRef, (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// onValue(dbRef, (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// });

// setTimeout(() => {
//   set(ref(db, 'age'), 29);
// }, 3500);

// get(dbRef).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });


// set(ref(db),{
//   name: 'assaf',
//   age: 29,
//   location: {
//     city: 'Tel Aviv',
//     country: 'Israel'
//   },
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Essence'
//   },
// });

// // remove(ref(db)).then(() => {
// //   console.log("Remove succeeded.")
// // }).catch((error) => {
// //   console.log("Remove failed: " + error.message)
// // });

// // set(ref(db), null)

// update(ref(db), {
//   stressLevel: 6,
//   'job/company': 'Amazon',
//   'job/title': 'manager',
//   'location/city': 'Haifa'
// });
