import React from 'react';

export default function ExportCSV() {
  const handleExport = () => {
    const reports = JSON.parse(localStorage.getItem('reports') || '[]');

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      ['Type,Description,Location,Timestamp']
        .concat(
          reports.map((r) =>
            [r.type, r.description, r.location, new Date(r.timestamp).toLocaleString('el-GR')].join(',')
          )
        )
        .join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'reports.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <button onClick={handleExport}>
      📤 Export CSV
    </button>
  );
}
