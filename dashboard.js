import { auth, db } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const userInfo = document.getElementById("userInfo");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, async (user) => {

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    try {

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

            const data = docSnap.data();

            userInfo.innerHTML = `
                <h3>Welcome, ${data.name}</h3>
                <p>📧 ${data.email}</p>
                <p>💰 Balance: ৳${data.balance ?? 0}</p>
                <p>👥 Referral: ${data.referral ?? 0}</p>
            `;

        } else {

            userInfo.innerHTML = `
                <h3>Welcome!</h3>
                <p>${user.email}</p>
                <p>No profile found.</p>
            `;

        }

    } catch (error) {

        userInfo.innerHTML = `
            <p>${error.message}</p>
        `;

    }

});

logoutBtn.addEventListener("click", async () => {

    await signOut(auth);

    alert("Logged Out Successfully!");

    window.location.href = "login.html";

});
