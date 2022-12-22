// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkzsMwJjI92CquEyjCgQTCgyfDFzyq3gE",
    authDomain: "sign-up-and-log-in-60657.firebaseapp.com",
    databaseURL: "https://sign-up-and-log-in-60657-default-rtdb.firebaseio.com",
    projectId: "sign-up-and-log-in-60657",
    storageBucket: "sign-up-and-log-in-60657.appspot.com",
    messagingSenderId: "564804513975",
    appId: "1:564804513975:web:830cd1a49558c5cc301d32",
    measurementId: "G-BSWYXLFXX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();


var email = document.getElementById('email')
var password = document.getElementById('password')
var parent = document.getElementById('parent')
window.save = function () {
    var val1 = {
        E_mail: email.value,
        Password: password.value

    };
    console.log(val1)
    val1.id = Math.random().toString().slice(2);
    const taskRef = ref(database, `tasks/${val1.id}/`);
    set(taskRef, val1);
};
function getData() {
    var list = [];
    const taskRef = ref(database, "tasks/");
    onChildAdded(taskRef, function (g) {
        list.push(g.val());
        console.log(list);
        parent.innerHTML = "";
        for (var i = 0; i < list.length; i++) {
            parent.innerHTML += `<li>${list[i].E_mail + list[i].Password}</li>`
        }
    })
}
getData();