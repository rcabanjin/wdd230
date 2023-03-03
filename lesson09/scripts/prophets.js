const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

function prophetAge(birthdate, deathdate) {
    const birth = new Date(birthdate);
    const death = deathdate ? new Date(deathdate) : new Date();
    const ageDiff = death - birth;
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
 
const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    prophets.forEach((prophet) => {
        //Create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let portrait = document.createElement('img');

        //Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        h3.innerHTML = `Birth: ${prophet.birthdate}<br>Birth: ${prophet.birthplace}<br>Children: ${prophet.numofchildren}<br>Age: ${prophetAge(prophet.birthdate, prophet.death)} Years Old <br>Years of service: ${prophet.length}`;

        //Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} $`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card_ with the created elements
       
        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(portrait);

        cards.appendChild(card);
    }); // end of forEach loop
}//endof function expression 