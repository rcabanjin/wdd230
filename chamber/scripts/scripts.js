const date = new Date();
const currentDate = date.toLocaleDateString('en-UK', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
document.getElementById('currentDate').textContent = currentDate;

const copyrightYear = date.getFullYear();
document.getElementById('currentYear').textContent = copyrightYear;

const lastModified = document.lastModified;
document.getElementById('lastupdated').textContent = lastModified;

const currentDay = date.getDay();
if (currentDay !== 1 && currentDay !== 2) {
  const adElement = document.querySelector('.ad');
  if (adElement) {
    adElement.style.display = 'none';
  }
}

function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
    }
      
    const hamburgerButton = document.getElementById("hamburger-button");
    hamburgerButton.addEventListener("click", toggleMenu);
    