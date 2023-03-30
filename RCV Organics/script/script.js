const date = new Date();
const currentDateElement = document.getElementById('currentDate');
if (currentDateElement !== null) {
  currentDateElement.textContent = date.toLocaleDateString('en-UK', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

const currentYearElement = document.getElementById('currentYear');
if (currentYearElement !== null) {
  currentYearElement.textContent = date.getFullYear();
}

const lastUpdatedElement = document.getElementById('lastupdated');
if (lastUpdatedElement !== null) {
  lastUpdatedElement.textContent = document.lastModified;
}

if (date.getDay() !== 1 && date.getDay() !== 2) {
  const adElement = document.querySelector('.ad');
  if (adElement !== null) {
    adElement.style.display = 'none';
  }
}



function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
  document.getElementById('hamburger-button').classList.toggle('open');
}

const x = document.getElementById('hamburger-button')
x.onclick = toggleMenu;
