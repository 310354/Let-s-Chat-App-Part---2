const firebaseConfig = {
    apiKey: "AIzaSyBgHzZiAi0r6kaVAd_nOIvAzQopGc5-smY",
    authDomain: "practice-f0f23.firebaseapp.com",
    databaseURL: "https://practice-f0f23-default-rtdb.firebaseio.com",
    projectId: "practice-f0f23",
    storageBucket: "practice-f0f23.appspot.com",
    messagingSenderId: "821261148620",
    appId: "1:821261148620:web:1f6e17300876f8dc6e7d69"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function add_user()
{
user_name=document.getElementById("user_name").value;
localStorage.setItem("user_name",user_name);
window.location="chat_room.html";

}