export function exportTXT(data) {
  const text = data.map(item => `${item.type} - ${item.description}`).join('\n');
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'citizen-report.txt';
  document.body.appendChild(link); // για Firefox
  link.click();
  document.body.removeChild(link);
}

export function exportJSON(data) {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'citizen-report.json';
  document.body.appendChild(link); // για Firefox
  link.click();
  document.body.removeChild(link);
}
