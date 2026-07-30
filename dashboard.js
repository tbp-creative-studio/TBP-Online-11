import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, async (user) => {

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();

        userEmail.innerHTML = `
            <h3>Welcome ${data.name}</h3>
            <p>Email: ${data.email}</p>
            <p>Balance: ৳${data.balance}</p>
        `;
    }

});

logoutBtn.addEventListener("click", async () => {

    await signOut(auth);

    alert("Logged Out!");

    window.location.href = "login.html";

});
