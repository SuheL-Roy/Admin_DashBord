import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCOoQiyQevNH_g8MtQeyr0iP7VfchCS9kg",
    authDomain: "ecomarece.firebaseapp.com",
    databaseURL: "https://ecomarece.firebaseio.com",
    projectId: "ecomarece",
    storageBucket: "ecomarece.appspot.com",
    messagingSenderId: "251802528134",
    appId: "1:251802528134:web:8fc961e47cf1144116a407"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

  export default storage;