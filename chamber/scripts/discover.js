import { places } from "../data/places.mjs"



const welcome = document.querySelector("#welcome");
const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (lastVisit === null) {
    welcome.textContent = "Welcome! Let us know if you have any questions.";
}
else {
    const timeSinceLastVisit = currentVisit - Number(lastVisit);
    const days = Math.floor(timeSinceLastVisit / (1000 * 60 * 60 * 24));

    if (days === 0) {
        welcome.textContent = "Back so soon! Awesome!";
    }
    else if (days === 1) {
        welcome.textContent = "You last visited 1 day ago.";
    }
    else {
        welcome.textContent = `You last visited ${days} days ago.`;
    }
}

localStorage.setItem("lastVisit", currentVisit);




const area = document.querySelector("#places");

places.forEach(place => {
    let card = document.createElement("div");
    let title = document.createElement("h2");
    let image = document.createElement("img");
    let address = document.createElement("address");
    let description = document.createElement("p");
    let button = document.createElement("button");

    title.textContent = place.name;
    address.textContent = place.address;
    description.textContent = place.description;
    image.setAttribute("src", place.photoUrl);
    image.setAttribute("alt", `Image of ${place.name}`);
    if ((places.indexOf(place) !== 0) && (places.indexOf(place) !==1))
    {
        image.setAttribute("loading", "lazy");
    }
    image.setAttribute("width", 300);
    image.setAttribute("height", 200);
    button.textContent = "Learn more"

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(button);
    
    area.appendChild(card);
});
