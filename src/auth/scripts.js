
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from '/src/firebase.js';
import { GoogleAuthProvider } from 'firebase/auth';

// Función para registrar usuarios con correo electrónico y contraseña
export const signUp = (email, password) => {
  if (email && password) {
    return (
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = '/app/dashboard';
        }
        )
    );
  } else {
    console.error('Correo electrónico y contraseña son requeridos');
  }
}

// Función para iniciar sesión con correo electrónico y contraseña
export const signIn = (email, password) => {
  if (email && password) {
    return (
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = '/app/dashboard';
        }
        )
    );
  } else {
    console.error('Correo electrónico y contraseña son requeridos');
  }
}

// Función para iniciar sesión con Google
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return auth.signInWithPopup(provider);
}

// Función para escuchar eventos de autenticación
export const listenAuthState = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      // El usuario está autenticado
      console.log('Usuario autenticado:', user);
    } else {
      // El usuario no está autenticado
      console.log('Usuario no autenticado');
    }
  });
}
