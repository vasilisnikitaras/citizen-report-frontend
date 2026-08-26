import { useState } from "react";

export default function Register({ onRegister }) {
  const [username, setUsername] = useState("");     // ⭐ ΝΕΟ
  const [role, setRole] = useState("user");         // ⭐ ΝΕΟ

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [community, setCommunity] = useState("");
  const [password, setPassword] = useState("");
  const cleanFullName = fullName.trim();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [openCategory, setOpenCategory] = useState(null);

  const categories = {
    "Δωδεκάνησα": [
      "Rhodes", "Kos", "Kalymnos", "Leros", "Patmos",
      "Karpathos", "Kasos", "Symi", "Tilos", "Nisyros",
      "Astypalaia", "Halki", "Megisti (Kastellorizo)",
      "Lipsi", "Agathonisi", "Pserimos", "Telendos",
      "Arki", "Marathi", "Farmakonisi", "Gyali",
      "Saria", "Strongyli", "Ro", "Alimia"
    ],

    "Ρόδος – Χωριά": [
      "Ialysos", "Kremasti", "Pastida", "Paradeisi",
      "Maritsa", "Koskinou", "Faliraki", "Kalithea",
      "Soroni", "Fanes", "Kalavarda", "Mandriko", "Salakos",
      "Emponas", "Siana", "Kritinia",
      "Lindos", "Pefki", "Lardos", "Kalathos", "Vlycha",
      "Kiotari", "Gennadi", "Lachania", "Kattavia",
      "Apolakkia", "Arnitha", "Mesanagros",
      "Archangelos", "Malona", "Massari", "Haraki",
      "Afantou", "Kolymbia",
      "Petaloudes", "Theologos", "Damatria"
    ],

    "Κρήτη": [
      "Heraklion", "Chania", "Rethymno", "Sitia",
      "Agios Nikolaos", "Ierapetra", "Malia", "Hersonissos"
    ],

    "Επτάνησα": [
      "Corfu", "Paxoi", "Kefalonia", "Zakynthos",
      "Lefkada", "Ithaki", "Kythira"
    ],

    "Ιόνιο": [
      "Argostoli", "Lixouri", "Sami"
    ],

    "Κυκλάδες": [
      "Santorini", "Mykonos", "Paros", "Naxos",
      "Syros", "Tinos", "Andros"
    ],

    "Αττική": [
      "Athens", "Piraeus", "Marousi", "Kifisia",
      "Glyfada", "Voula", "Varkiza", "Peristeri",
      "Chalandri", "Nea Smyrni", "Zografou"
    ],

    "Θεσσαλονίκη": [
      "Thessaloniki", "Kalamaria", "Pylaia",
      "Efkarpia", "Stavroupoli", "Neapoli",
      "Sykies", "Panorama"
    ],

    "Μακεδονία": [
      "Kavala", "Serres", "Drama", "Veria",
      "Kozani", "Florina", "Edessa", "Kilkis",
      "Naousa", "Grevena"
    ],

    "Θράκη": [
      "Komotini", "Xanthi", "Alexandroupoli",
      "Soufli", "Didymoteicho"
    ],

    "Ήπειρος": [
      "Ioannina", "Arta", "Preveza", "Igoumenitsa"
    ],

    "Θεσσαλία": [
      "Larisa", "Volos", "Trikala", "Karditsa"
    ],

    "Στερεά Ελλάδα": [
      "Lamia", "Chalkida", "Agrinio", "Messolonghi"
    ],

    "Πελοπόννησος": [
      "Patra", "Tripoli", "Kalamata", "Corinth",
      "Argos", "Nafplio", "Sparti"
    ],

    "Καναδάς": [
      "Laval", "Montreal", "Toronto",
      "Ottawa", "Quebec City", "Hamilton", "Vancouver"
    ]
  };

  const handleRegister = async () => {
    setError("");
    setSuccess("");

    if (!fullName || !email || !username || !community || !password) {
      setError("Συμπλήρωσε όλα τα πεδία");
      return;
    }

    try {
      const res = await fetch("https://citizen-report-backend-chi.vercel.app/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    fullName,
    email,
    username,
    role,
    community,
    password
  }),
});


      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registration failed");
        return;
      }

      setSuccess("✔ Ο χρήστης δημιουργήθηκε!");
      if (onRegister) onRegister(email);
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f0f0f0" }}>
      <div style={{ background: "white", padding: "40px", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", width: "320px", textAlign: "center" }}>
        
        <h2 style={{ color: "#2D8C3C", marginBottom: "20px" }}>🆕 Δημιουργία Χρήστη</h2>

        {/* ⭐ USERNAME */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
        />

        <input
          type="text"
          placeholder="Πλήρες όνομα"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
        />

        {/* ⭐ ROLE SELECT */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
        >
          <option value="user">Citizen</option>
          <option value="admin">Admin</option>
        </select>

        {/* ⭐ COMMUNITY DROPDOWN (UNCHANGED) */}
        <div style={{ textAlign: "left", marginBottom: "15px" }}>
          <div
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              background: "white",
              cursor: "pointer"
            }}
            onClick={() => setOpenCategory(openCategory ? null : "main")}
          >
            {community || "Επίλεξε κοινότητα / δήμο / χωριό / νησί"}
          </div>

          {openCategory && (
            <div style={{
              marginTop: "10px",
              maxHeight: "250px",
              overflowY: "auto",
              border: "1px solid #ccc",
              borderRadius: "6px",
              background: "white",
              padding: "10px"
            }}>
              {Object.keys(categories).map((cat) => (
                <div key={cat}>
                  <div
                    onClick={() => setOpenCategory(openCategory === cat ? null : cat)}
                    style={{
                      padding: "10px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      borderBottom: "1px solid #eee"
                    }}
                  >
                    ▶ {cat}
                  </div>

                  {openCategory === cat && (
                    <div style={{ paddingLeft: "15px" }}>
                      {categories[cat].map((item) => (
                        <div
                          key={item}
                          onClick={() => {
                            setCommunity(item);
                            setOpenCategory(null);
                          }}
                          style={{
                            padding: "8px",
                            cursor: "pointer",
                            borderBottom: "1px solid #f0f0f0"
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <input
          type="password"
          placeholder="Κωδικός"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
        />

        {error && <div style={{ color: "red", marginBottom: "15px" }}>{error}</div>}
        {success && <div style={{ color: "green", marginBottom: "15px" }}>{success}</div>}

        <button
          onClick={handleRegister}
          style={{ width: "100%", padding: "12px", backgroundColor: "#2D8C3C", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}
        >
          Δημιουργία
        </button>
      </div>
    </div>
  );
}
