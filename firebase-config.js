// ─────────────────────────────────────────────
//  Firebase Configuration & Initialization
// ─────────────────────────────────────────────

// Estas variables se pueden inyectar vía Vercel Environment Variables
// o configurar manualmente aquí para pruebas locales.

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_Yvhz8iLY0r0Xc3HRxXwEJsRFeqpZKps",
    authDomain: "okr-intelligence-system.firebaseapp.com",
    projectId: "okr-intelligence-system",
    storageBucket: "okr-intelligence-system.firebasestorage.app",
    messagingSenderId: "142873057436",
    appId: "1:142873057436:web:dd02c47380408acbbef559"
};

// Iniciar Firebase
firebase.initializeApp(firebaseConfig);
window.dbFirestore = firebase.firestore();

// Habilitar persistencia offline (opcional pero recomendado)
window.dbFirestore.enablePersistence().catch((err) => {
    if (err.code == 'failed-precondition') {
        console.warn('Persistencia falló: múltiples pestañas abiertas');
    } else if (err.code == 'unimplemented') {
        console.warn('Persistencia no soportada por el navegador');
    }
});

console.log("🔥 Firebase Firestore inicializado");
