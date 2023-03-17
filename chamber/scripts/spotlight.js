const source = 'json/spotlight.json';

async function businessinfo() {
  const response = await fetch(source);
  const data = await response.json();
  displayRandomCards(data.businesses, "container1");
  displayRandomCards(data.businesses, "container2");
  displayRandomCards(data.businesses, "container3");
}

businessinfo();

const displayRandomCards = (businesses, containerId) => {
  const goldMembers = businesses.filter(business => business.member_status === "gold");

  const container = document.querySelector(`#${containerId}`);

  for (let i = 0; i < 1; i++) {
    const randomIndex = Math.floor(Math.random() * goldMembers.length);
    const business = goldMembers[randomIndex];

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
    d_image.setAttribute("height", "auto");
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

    container.appendChild(card);
  }
};
