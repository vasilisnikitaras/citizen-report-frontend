import React from 'react';
import { exportTXT, exportJSON } from '../exportUtils';

export default function ReportList({ reports }) {
  if (!reports || reports.length === 0) return null;

  return (
    <div style={{ marginTop: '30px' }}>
      <h2 style={{ color: '#CC7722' }}>📋 Καταχωρημένες Καταγγελίες</h2>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {reports.map((r, i) => (
          <li key={i} style={{ marginBottom: '10px' }}>
            <strong>{r.type}</strong>: {r.description}
            <br />

            <span style={{ fontSize: '14px', color: '#ccc' }}>
              📍 Τοποθεσία: {r.location}
            </span>
            <br />

            <span style={{ fontSize: '12px', color: '#aaa' }}>
              🕒 {new Date(r.timestamp).toLocaleString('el-GR')}
            </span>
            <br />

            {/* 🔥 ΕΔΩ ΜΠΑΙΝΕΙ Ο USER */}
            <span style={{ fontSize: '14px', color: '#ccc' }}>
              👤 Χρήστης: {r.user}
            </span>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => exportTXT(reports)} style={{ marginRight: '10px' }}>
          📄 Export TXT
        </button>
        <button onClick={() => exportJSON(reports)}>
          🧾 Export JSON
        </button>
      </div>
    </div>
  );
}
