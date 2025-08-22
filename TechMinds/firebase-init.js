
// Firebase initialization
const firebaseConfig = {
    apiKey: "AIzaSyBEVvm_p8aB8KqQZu3uhfyFNqB3kLaPwKg",
    authDomain: "techminds-f4838.firebaseapp.com",
    projectId: "techminds-f4838",
    storageBucket: "techminds-f4838.firebasestorage.app",
    messagingSenderId: "528859331234",
    appId: "1:528859331234:web:b73df6c15d3e33f91d75fb",
    measurementId: "G-7RKWDRXFWW"
};

// Initialize Firebase only if not already initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}
