// trigger deploy 2
import { useState, useEffect } from 'react';
import ReportTypeSelector from './components/ReportTypeSelector.jsx';
import ReportForm from './components/ReportForm.jsx';
import ReportList from './components/ReportList.jsx';
import Login from './components/login.jsx';
import ClearReports from './components/ClearReports.jsx';
import ExportCSV from './components/ExportCSV.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';

function App() {
  const [selectedType, setSelectedType] = useState('');
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
  const saved = localStorage.getItem("user");
  if (saved) {
    setUser(saved.trim());
  }
  }, []);
  
  // ⭐ AUTO-DETECT LANGUAGE
  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
  
    let lang = "en"; // default
  
    if (userLang.startsWith("fr")) lang = "fr";
    if (userLang.startsWith("el")) lang = "el";
  
    i18n.changeLanguage(lang);
  }, []);

  const [reports, setReports] = useState(
    JSON.parse(localStorage.getItem("reports") || "[]")
  );

  const [dbReports, setDbReports] = useState([]);

  useEffect(() => {
  const token = localStorage.getItem("token");

  console.log("🔥 ADMIN CHECK:", user);
  console.log("🔥 TOKEN:", token);

  if (user.trim().endsWith("_admin")) {
    console.log("🚀 FETCH STARTED FOR ADMIN");

    const interval = setInterval(() => {
      console.log("📡 FETCHING /reports ...");

            fetch("https://citizen-report-backend-chi.vercel.app/reports", {
          headers: {
            Authorization: "Bearer " + token
          }
        })

        .then(res => {
          console.log("📥 RESPONSE STATUS:", res.status);
          return res.json();
        })
        .then(data => {
          console.log("📊 DATA RECEIVED:", data);
          setDbReports(data);
        })
        .catch(err => console.log("❌ FETCH ERROR:", err));
    }, 2000);

    return () => clearInterval(interval);
  } else {
    console.log("⛔ NOT ADMIN, NO FETCH");
  }
}, [user]);

  const addReport = (newReport) => {
    const updated = [...reports, newReport];
    setReports(updated);
    localStorage.setItem("reports", JSON.stringify(updated));
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser('');
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const themeStyles = {
    backgroundColor: darkMode ? '#000' : '#f4f4f4',
    color: darkMode ? '#fff' : '#222'
  };

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px', ...themeStyles }}>
      <h1 style={{ color: '#CC7722' }}>Citizen Report</h1>
      <p>👤 Συνδεδεμένος ως: <strong>{user}</strong></p>

      <button
        onClick={handleLogout}
        style={{
          marginBottom: '10px',
          backgroundColor: '#C2272D',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          marginRight: '10px'
        }}
      >
        🔓 Αποσύνδεση
      </button>

      <button
        onClick={toggleTheme}
        style={{
          marginBottom: '20px',
          backgroundColor: '#666',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        {darkMode ? '🌞 Φωτεινό Θέμα' : '🌙 Σκοτεινό Θέμα'}
      </button>

      <ReportTypeSelector selectedType={selectedType} setSelectedType={setSelectedType} />

      <ReportForm selectedType={selectedType} addReport={addReport} />

      {/* ⭐ CITIZEN → LOCALSTORAGE REPORTS */}
      {!user.trim().endsWith("_admin") && (
        <ReportList reports={reports} />
      )}

      {/* ⭐ ADMIN → ONLY AdminDashboard */}
      {user.trim().endsWith("_admin") && (
        <AdminDashboard reports={dbReports} />
      )}

      <ClearReports />
      <ExportCSV />

      <footer
        style={{
          marginTop: '40px',
          fontSize: '14px',
          color: 'var(--text-color)',
          textAlign: 'center'
        }}
      >
        © 2026 Citizen Report by Vasilis Nikitaras<br />
        Resale is strictly prohibited and punishable by law.<br />
        Contact: vasilis.nikitaras@gmail.com
      </footer>
    </div>
  );
}

export default App;
