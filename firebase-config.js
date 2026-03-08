// ─────────────────────────────────────────────
//  Firebase Configuration & Initialization
// ─────────────────────────────────────────────

// Estas variables se pueden inyectar vía Vercel Environment Variables
// o configurar manualmente aquí para pruebas locales.
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Iniciar Firebase
firebase.initializeApp(firebaseConfig);
const dbFirestore = firebase.firestore();

// Habilitar persistencia offline (opcional pero recomendado)
dbFirestore.enablePersistence().catch((err) => {
    if (err.code == 'failed-precondition') {
        console.warn('Persistencia falló: múltiples pestañas abiertas');
    } else if (err.code == 'unimplemented') {
        console.warn('Persistencia no soportada por el navegador');
    }
});

console.log("🔥 Firebase Firestore inicializado");
