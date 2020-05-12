import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

console.log(process.env);

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").on("child_changed", (snap) => {
//   console.log(snap.key, snap.val());
// });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((snapshotChild) => {
//     expenses.push({
//       id: snapshotChild.key,
//       ...snapshotChild.val(),
//     });
//   });
//   console.log(expenses);
// });

database.ref("expenses").push({
  description: "Date",
  amount: 8000,
  createdAt: 100,
  note: "Date with she",
});

// database.ref().on(
//   "value",
//   (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   },
//   (error) => {
//     console.log("Something went wrong", error);
//   }
// );

// database.ref().set({
//   name: "Jakub Świączkowski",
//   age: 25,
//   stressLevel: 6,
//   job: {
//     title: "Software Developer",
//     company: "Google",
//   },
//   location: {
//     city: "Philadelphia",
//     country: "United State",
//   },
// });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seatle",
// });
