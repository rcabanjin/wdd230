// Get the current user's agent string
const userKey = navigator.userAgent;

// Get the number of Fresh Form submissions from local storage, or set to 0 if it's not there
let formCount = parseInt(localStorage.getItem(userKey)) || 0;

// Update the form count element in the HTML
const formCountEl = document.querySelector('#form-count');
formCountEl.textContent = formCount;

// Listen for form submissions and update the form count in local storage
const freshForm = document.querySelector('#drink-form');
freshForm.addEventListener('submit', event => {
  event.preventDefault();
  formCount++;
  localStorage.setItem(userKey, formCount);
  formCountEl.textContent = formCount;
});
