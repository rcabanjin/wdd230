const source = 'json/directory.json';
let listDisplay = false;

async function businessinfo() {
    const response = await fetch(source);
    const data = await response.json();
    displayGrid(data.businesses);
}
businessinfo();

const displayGrid = (businesses) => {
    const cards = document.querySelector('div.businesses'); 


    businesses.forEach((business) => {
        const card = document.createElement("section");
        const d_image = document.createElement("img");
        const name = document.createElement("h2");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const websiteLink = document.createElement("a");
        const information = document.createElement("p");

        d_image.setAttribute("src", business.image);
        d_image.setAttribute("alt", `${name} d_image`);
        d_image.setAttribute("loading", "lazy");
        d_image.setAttribute("width", "200");
        d_image.setAttribute("height", "200");
        d_image.classList.add("not-list");

        name.textContent = `${business.name}`;
        address.textContent = `${business.address}`;
        phone.textContent = `${business.phone}`;
        
        websiteLink.href = business.website;
        websiteLink.target = "_blank";
        websiteLink.textContent = "Link to website";
   
        information.textContent = `${business.information} Information`;
        information.classList.add("not-list");

        card.appendChild(d_image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(websiteLink);
        card.appendChild(information);
    
        cards.appendChild(card);
    }) 
} 

const gridButton = document.querySelector("#grid-button");
const listButton = document.querySelector("#list-button");
const display = document.querySelector(".businesses");

gridButton.addEventListener("click", () => {
	display.classList.remove("list-view");
});

listButton.addEventListener("click", () => {
	display.classList.add("list-view");
});
