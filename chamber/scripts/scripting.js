let date = new Date();
let year = date.getFullYear();
document.getElementById('currentyear').innerHTML = year;
document.getElementById('lastupdated').textContent = `Last updated: ${document.lastModified}`;