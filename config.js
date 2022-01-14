import firebase from 'firebase';

// add SDK Firebase

var firebaseConfig = {
    
// Your web app's Firebase configuration
  
    apiKey: "AIzaSyDS0Hrz9fM3fG6_raXXkvuHAKnnykg6p64",
    authDomain: "team-voting-app-e5446.firebaseapp.com",
    projectId:"team-voting-app-e5446",
    storageBucket:"team-voting-app-e5446.appspot.com",
    messagingSenderId:"40421649806",
    appId: "1:40421649806:web:67afc6301b81c8d9b988df"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
