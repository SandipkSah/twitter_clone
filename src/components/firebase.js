import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCw-li0IscS2rJr68dSjoJL3KM3eFq5PfE",
//   authDomain: "twitter-clone-1faac.firebaseapp.com",
//   databaseURL: "https://twitter-clone-1faac.firebaseio.com",
//   projectId: "twitter-clone-1faac",
//   storageBucket: "twitter-clone-1faac.appspot.com",
//   messagingSenderId: "316208638057",
//   appId: "1:316208638057:web:75a37bf24fab32ff145af8",
//   measurementId: "G-HGFP2LDXP9",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAaoUmmpPBJU3XV7gfz08AGuFwgTSsTV2I",
  authDomain: "twitter-clone-d403d.firebaseapp.com",
  projectId: "twitter-clone-d403d",
  storageBucket: "twitter-clone-d403d.appspot.com",
  messagingSenderId: "725770001817",
  appId: "1:725770001817:web:85e6fbfcfae1c88bc90708",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
