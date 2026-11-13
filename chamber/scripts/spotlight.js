const grid = document.querySelector("#spotlight");

const spotlightUrl = "https://chadhall1313.github.io/wdd231/chamber/data/members.json"

async function GetBusinessInfo(spotlightUrl) {
    try {
        const response = await fetch(spotlightUrl);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        console.table(data.company);
        const goldSilverMembers = data.company.filter(member => member.level == "Silver" || member.level == "Gold").sort(() =>Math.random() - 0.5).slice(0, 2);
        console.table(goldSilverMembers);
        displayMembers(goldSilverMembers);
    } catch (error) {
        console.error(error);
    }
}

const displayMembers = (members) => {
    members.forEach(member => {
        let card = document.createElement("article");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let number = document.createElement("p");
        let website = document.createElement("a");
        let image = document.createElement("img");
        let level = document.createElement("p");

        name.textContent = member.name;
        address.textContent = member.address;
        number.textContent = member.number;
        website.textContent = member.website;
        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank")
        level.textContent = `${member.level} Member`;
        image.setAttribute("src", member.image);
        image.setAttribute("alt", `${member.name} logo`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "100");
        image.setAttribute("height", "100");

        card.appendChild(name);
        card.appendChild(level);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(website);
        grid.appendChild(card);
    });
}


GetBusinessInfo(spotlightUrl)