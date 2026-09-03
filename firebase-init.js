// Firebase 初期化（全ページ共通で読み込む）
const firebaseConfig = {
    apiKey: "AIzaSyCa_CSarwwYqnX_F2k9SL3HeaZNGCI_RCo",
    authDomain: "work-schedule-333d5.firebaseapp.com",
    projectId: "work-schedule-333d5",
    storageBucket: "work-schedule-333d5.firebasestorage.app",
    messagingSenderId: "128681238869",
    appId: "1:128681238869:web:1eb85a4abbfd5b1baa8fdc",
    measurementId: "G-7KFG77ZNQE"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Firestoreへアクセスする前に匿名認証のサインインを待つ
const wsAuthReady = new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        if (user) {
            unsubscribe();
            resolve(user);
        }
    });
    firebase.auth().signInAnonymously().catch(err => {
        console.error("匿名認証エラー:", err);
        reject(err);
    });
});
