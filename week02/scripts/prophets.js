const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector("#cards");
async function getProphetData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        // console.table(data.prophets);
        displayProphets(data.prophets);
    } catch (error) {
        console.error(error);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let birth = document.createElement("p");
        let birthPlace = document.createElement("p");
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birth.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        portrait.setAttribute("src", `${prophet.imageurl}`);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "240");
        portrait.setAttribute("height", "300");
        card.appendChild(fullName);
        card.appendChild(birth);
        card.appendChild(birthPlace);
        card.appendChild(portrait);


        cards.appendChild(card);
    });
}



getProphetData(url);