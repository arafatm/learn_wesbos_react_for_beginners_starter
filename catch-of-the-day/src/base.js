import Rebase from 're-base'; // react-firebase state mirroring
import firebase from 'firebase'; // firebase adapter

// Your web app's Firebase configuration
// Copied from firebase console
var firebaseConfig = {
  apiKey: "AIzaSyBw7ZPtNgHBEqH3ggUsUduJMVv_0-rTcEw",
  authDomain: "wesbos-react-for-beginne-3d560.firebaseapp.com",
  databaseURL: "https://wesbos-react-for-beginne-3d560.firebaseio.com"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

