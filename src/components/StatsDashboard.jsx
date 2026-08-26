import React, { useEffect, useState } from 'react';

export default function StatsDashboard({ reports }) {
  const [stats, setStats] = useState({});

  useEffect(() => {
    // Χρησιμοποιούμε τα reports που έρχονται από το App.jsx (dbReports για admin)
    const counts = reports.reduce((acc, r) => {
      acc[r.type] = (acc[r.type] || 0) + 1;
      return acc;
    }, {});
    setStats(counts);
  }, [reports]);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2 style={{ color: '#CC7722' }}>📊 Στατιστικά Καταγγελιών</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {Object.entries(stats).map(([type, count]) => (
          <li key={type} style={{ marginBottom: '10px' }}>
            <strong>{type}:</strong> {count} καταγγελίες
          </li>
        ))}
      </ul>
    </div>
  );
}
