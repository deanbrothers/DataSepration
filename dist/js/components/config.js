// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/6.3.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#config-web-app -->

// <script>
  // Your web app's Firebase configuration
  export const token=sessionStorage.getItem('token');
  console.log("token"+token);
  var firebaseConfig = {
    apiKey:"AIzaSyBHm4KDJsfXnFkuSRthGW8-4Xd9rPjAeYQ",
    authDomain: "bizticket-25694.firebaseapp.com",
    databaseURL: "https://bizticket-25694.firebaseio.com",
    projectId: "bizticket-25694",
    storageBucket: "bizticket-25694.appspot.com",
    messagingSenderId: "722748938988",
    appId: "1:722748938988:web:169a608faf0adae3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// </script>