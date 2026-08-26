import { useState } from "react";
import Register from "./Register.jsx";

export default function Login({ onLogin }) {
  const [showRegister, setShowRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (showRegister) {
    return <Register onRegister={() => setShowRegister(false)} />;
  }

  const handleLogin = async () => {
  setError("");

  // ⭐ Validation
  if (!username || !password) {
    setError("Συμπλήρωσε όλα τα πεδία");
    return;
  }

  // ⭐ FIX — κόβει τα κενά στο username + password
  const cleanUsername = username.trim();
  const cleanPassword = password.trim();

  try {
    const res = await fetch("https://citizen-report-backend-chi.vercel.app/login", {

  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: cleanUsername, password: cleanPassword }),
});


    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Login failed");
      return;
    }

    // Save token
    localStorage.setItem("token", data.token);

    // Save username
    localStorage.setItem("user", cleanUsername);

    // Notify App.jsx
    onLogin(cleanUsername);
  } catch (err) {
    setError("Server error");
  }
};

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f0f0",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          width: "320px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            background: "#CC7722",
            borderRadius: "50%",
            margin: "0 auto 20px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          CR
        </div>

        <h2 style={{ color: "#CC7722", marginBottom: "20px" }}>
          🔐 Σύνδεση Χρήστη
        </h2>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Όνομα χρήστη"
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Κωδικός"
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "15px",
          }}
        />

        {error && (
          <div style={{ color: "red", marginBottom: "15px" }}>{error}</div>
        )}

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#CC7722",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Σύνδεση
        </button>

        <button
          onClick={() => setShowRegister(true)}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "gray",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "10px",
          }}
        >
          🆕 Δημιουργία Λογαριασμού
        </button>
      </div>
    </div>
  );
}
