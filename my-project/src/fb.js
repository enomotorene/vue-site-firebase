

//  // Your web app's Firebase configuration
//  var firebaseConfig = {
//   apiKey: "AIzaSyCDGWDAx3DxHR_xwHvGgNT7eh1btHDYPxA",
//   authDomain: "portfolio-27b4f.firebaseapp.com",
//   databaseURL: "https://portfolio-27b4f.firebaseio.com",
//   projectId: "portfolio-27b4f",
//   storageBucket: "portfolio-27b4f.appspot.com",
//   messagingSenderId: "310608396437",
//   appId: "1:310608396437:web:a33d25b3ace4a0d3"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// //reference message collection
// var messagesRef = firebase.database().ref('messages');

//   //listen for form submit
//   document.getElementById('contactForm').addEventListener('submit', submitForm);


//   //submit form
//   function submitForm(e) {
//     e.preventDefault();
//     // eslint-disable-next-line no-console
//     //console.log("123");
//     //get values
//     var name = getInputVal('name');
//     var email = getInputVal('email');
//     var phone = getInputVal('phone');
//     var message = getInputVal('message');

//     //console.log(name);

//     //save message
//     saveMessage(name, email, phone, message);
//   }

//   //function to get form values
//   function getInputVal(id) {
//     return document.getElementById(id).nodeValue;
//   }

//   //save message to firebase
//   function saveMessage(name, email, phone, message) {
//     var newMessageRes = messagesRef.push();
//     newMessageRes.set({
//       name: name,
//       email: email,
//       phone: phone,
//       message: message
//     })
//   }