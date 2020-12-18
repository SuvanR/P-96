var firebaseConfig = {
    apiKey: "AIzaSyCsX9VNwoVfzL9--2O-G3b91r2HLRZsytg",
    authDomain: "kwitter-homework-afec9.firebaseapp.com",
    databaseURL: "https://kwitter-homework-afec9-default-rtdb.firebaseio.com",
    projectId: "kwitter-homework-afec9",
    storageBucket: "kwitter-homework-afec9.appspot.com",
    messagingSenderId: "434820575869",
    appId: "1:434820575869:web:81ccc83c2be666960bf714"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name")

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        
                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}