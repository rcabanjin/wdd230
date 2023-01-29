let date = new Date();
let year = date.getFullYear();
document.getElementById('currentyear').innerHTML = year;
document.getElementById('lastupdated').textContent = `Last updated: ${document.lastModified}`;

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle("open");
    document.getElementById('hamburgerBtn').classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;