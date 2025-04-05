importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBHWEG4f3eh3qyOQJPv6umxFOVLmii9k4s",
  authDomain: "distribution-center-5521e.firebaseapp.com",
  projectId: "distribution-center-5521e",
  storageBucket: "distribution-center-5521e.appspot.com",
  messagingSenderId: "322162728330",
  appId: "1:322162728330:web:709daf0ef3cc4e0d2a7c73",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Background message received:", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png"
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
