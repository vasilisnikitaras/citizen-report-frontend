import React from 'react';

export default function ReportTypeSelector({ selectedType, setSelectedType }) {
  const types = [
    { emoji: "🚗", label: "Επικίνδυνη Οδήγηση" },
    { emoji: "🅿️", label: "Παράνομη Στάθμευση" },
    { emoji: "🧍", label: "Βία / Παρενόχληση" },
    { emoji: "🏢", label: "Διαφθορά / Δημόσια Υπηρεσία" }
  ];

  return (
    <div style={{ marginBottom: '20px' }}>
      <p style={{ fontSize: '18px' }}>Επίλεξε τύπο καταγγελίας:</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
        {types.map(({ emoji, label }) => (
          <button
            key={label}
            onClick={() => setSelectedType(label)}
            style={{
              backgroundColor: selectedType === label ? '#CC7722' : '#333',
              color: 'white',
              border: 'none',
              padding: '12px 18px',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              minWidth: '200px'
            }}
          >
            {emoji} {label}
          </button>
        ))}
      </div>

      {selectedType && (
        <button
          onClick={() => setSelectedType('')}
          style={{
            marginTop: '15px',
            backgroundColor: '#666',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          ❌ Καθαρισμός Επιλογής
        </button>
      )}
    </div>
  );
}
