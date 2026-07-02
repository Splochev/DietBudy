import { sharedFirebaseConfig } from 'https://splochev.github.io/personalBudy/js/firebase-config.js';
// SSO NOTE: All buddy apps share one Firebase project. Session sharing works because
// all apps run on splochev.github.io (same origin). Moving any app to a custom domain
// will silently break SSO.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

// Same Firebase project as GymBuddy → shared auth session (SSO-like)
const firebaseConfig = {
  ...sharedFirebaseConfig,
  appId: "1:138709908215:web:f3720bd302232911bfb1f2",
  measurementId: "G-MWKE7DXT5S",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
