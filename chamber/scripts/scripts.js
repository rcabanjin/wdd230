let date = new Date();
let currentDate = date.toLocaleDateString('en-UK', { weekday:"long", day:"numeric", month:"long", year:"numeric"})
document.getElementById("currentDate").textContent = currentDate;
let copyrightYear = date.getFullYear();
document.getElementById("currentYear").textContent = copyrightYear;
const lastModified = document.lastModified;
document.getElementById("lastupdated").textContent = lastModified;
let currentDay = date.getDay();
if (currentDay !== 1 && currentDay !== 2) {
    document.querySelector(".ad").style.display = "none";}


function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
    }
    
    const x = document.getElementById("hamburger-button");
    
    x.onclick = toggleMenu;
    