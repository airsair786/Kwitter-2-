var firebaseConfig = {
    apiKey: "AIzaSyBHQ-GIa8gmUz0d3dkS-8rj9b2Ap8OuAeU",
    authDomain: "kwitter-f5a00.firebaseapp.com",
    databaseURL: "https://kwitter-f5a00-default-rtdb.firebaseio.com",
    projectId: "kwitter-f5a00",
    storageBucket: "kwitter-f5a00.appspot.com",
    messagingSenderId: "517887732376",
    appId: "1:517887732376:web:421f2e389e3da9cbef7eed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
