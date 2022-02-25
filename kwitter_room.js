
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAKXplu6syzmUuCZTJdJnIJ3yb1zFoY9Sk",
      authDomain: "kwitter-f84a0.firebaseapp.com",
      databaseURL: "https://kwitter-f84a0-default-rtdb.firebaseio.com",
      projectId: "kwitter-f84a0",
      storageBucket: "kwitter-f84a0.appspot.com",
      messagingSenderId: "785891353218",
      appId: "1:785891353218:web:7a92be33457a814b0a8a9b",
      measurementId: "G-QJ8XKWDK35"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
    function addRoom()
    {
          Room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(Room_name).update({
               purpose:"adding room name" 
          });
          localStorage.setItem("room_name",Room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name-"+Room_names);
      row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}