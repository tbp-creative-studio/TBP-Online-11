import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {

    if (user) {
        userEmail.innerText = "Email: " + user.email;
    } else {
        window.location.href = "login.html";
    }

});

logoutBtn.addEventListener("click", async () => {

    await signOut(auth);

    alert("Logged Out!");

    window.location.href = "login.html";

});
