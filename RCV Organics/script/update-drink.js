// Update drink count
document.addEventListener("DOMContentLoaded", function() {
function updateDrinkCount() {
  const drinkCount = localStorage.getItem('drinkCount');
  const drinkCountElement = document.getElementById('drink-count');
  if (drinkCount) {
    drinkCountElement.innerText = drinkCount;
  } else {
    drinkCountElement.innerText = '1';
  }
}

// Increment drink count
function incrementDrinkCount() {
  const drinkCount = localStorage.getItem('drinkCount');
  if (drinkCount) {
    localStorage.setItem('drinkCount', parseInt(drinkCount) + 1);
  } else {
    localStorage.setItem('drinkCount', 1);
  }
  updateDrinkCount();
}

// Call incrementDrinkCount when form is submitted
const form = document.getElementById('drink-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  incrementDrinkCount();
});

// Update drink count on page load
updateDrinkCount();

});