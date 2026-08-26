import React from 'react';

export default function ClearReports() {

  const handleClear = async () => {
    const user = localStorage.getItem("user");

    // ⭐ CITIZEN → Σβήνει localStorage
    if (!user.includes("admin")) {
      localStorage.removeItem('reports');
      window.location.reload();
      return;
    }

    // ⭐ ADMIN → Σβήνει backend (Neon DB)
    const token = localStorage.getItem("token");

    await fetch("http://localhost:3001/clear-reports", {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token
      }
    });

    alert("🧹 Όλες οι καταγγελίες διαγράφηκαν από τη Neon DB!");
    window.location.reload();
  };

  return (
    <button
      onClick={handleClear}
      style={{
        marginTop: '20px',
        backgroundColor: '#C2272D',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '6px',
        cursor: 'pointer'
      }}
    >
      🧹 Καθαρισμός Όλων των Καταγγελιών
    </button>
  );
}
