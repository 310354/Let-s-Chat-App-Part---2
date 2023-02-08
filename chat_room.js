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

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function addRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room_name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="chat_page.html";
}

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="chat_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}