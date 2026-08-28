import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        login: "Login",
        logout: "Logout",
        username: "Username",
        password: "Password",
        createAccount: "Create Account",
        connectedAs: "Connected as"
      }
    },
    el: {
      translation: {
        login: "Σύνδεση",
        logout: "Αποσύνδεση",
        username: "Όνομα χρήστη",
        password: "Κωδικός",
        createAccount: "Δημιουργία Λογαριασμού",
        connectedAs: "Συνδεδεμένος ως"
      }
    },
    fr: {
      translation: {
        login: "Connexion",
        logout: "Déconnexion",
        username: "Nom d'utilisateur",
        password: "Mot de passe",
        createAccount: "Créer un compte",
        connectedAs: "Connecté en tant que"
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
