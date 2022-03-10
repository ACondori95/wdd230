const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

document.getElementById('chamberdate').textContent = new Date().toLocaleDateString('en-UK', options);