// Fetch the fruit data from the JSON file
fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
  .then(response => response.json())
  .then(data => {
    // Populate the select elements with the fruit data
    const fruitSelects = document.querySelectorAll('select');
    fruitSelects.forEach(select => {
      data.forEach(fruit => {
        const option = document.createElement('option');
        option.value = fruit.name;
        option.text = fruit.name;
        select.appendChild(option);
      });
    });

    // Add event listener to the form submit button
    const form = document.querySelector('form');
    form.addEventListener('submit', event => {
      event.preventDefault(); // prevent form submission

      // Get input values from the form
      const firstName = document.querySelector('#first-name').value;
      const email = document.querySelector('#email').value;
      const phone = document.querySelector('#phone').value;
      const fruit1 = document.querySelector('#fruit1').value;
      const fruit2 = document.querySelector('#fruit2').value;
      const fruit3 = document.querySelector('#fruit3').value;
      const instructions = document.querySelector('#special-instructions').value;

      // Calculate the total nutritional information for the selected fruits
      const selectedFruits = [fruit1, fruit2, fruit3];
      let totalCarbs = 0;
      let totalProtein = 0;
      let totalFat = 0;
      let totalSugar = 0;
      let totalCalories = 0;
      selectedFruits.forEach(fruitName => {
        const fruitData = data.find(fruit => fruit.name === fruitName);
        totalCarbs += fruitData.nutritions.carbohydrates;
        totalProtein += fruitData.nutritions.protein;
        totalFat += fruitData.nutritions.fat;
        totalSugar += fruitData.nutritions.sugar;
        totalCalories += fruitData.nutritions.calories;
      });

      // Get the current date and time
      const date = new Date();
      const dateString = date.toLocaleString();

      // Create the formatted output
      const output = `Order Date: ${dateString}<br>
                      Name: ${firstName}<br>
                      Email: ${email}<br>
                      Phone: ${phone}<br>
                      Fruits: ${selectedFruits.join(', ')}<br>
                      Special Instructions: ${instructions}<br>
                      Total Nutrition:<br>
                      Carbs: ${totalCarbs}g<br>
                      Protein: ${totalProtein}g<br>
                      Fat: ${totalFat}g<br>
                      Sugar: ${totalSugar}g<br>
                      Calories: ${totalCalories}`;
      
      // Display the output in the output area
      const outputArea = document.querySelector('#order-summary');
      outputArea.innerHTML = output;
    });
  });
