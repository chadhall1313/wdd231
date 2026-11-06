const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
const display = document.querySelector("#listOrGrid");

gridBtn.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
    display.classList.remove("before");
})

listBtn.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
    display.classList.remove("before");
})

const url = "https://chadhall1313.github.io/wdd231/chamber/data/members.json"

async function GetBusinessInfo(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        console.table(data.company);
        displayMembers(data.company);
    } catch (error) {
        console.error(error);
    }
}

const displayMembers = (members) => {
    members.forEach(member => {
        let card = document.createElement("div");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let number = document.createElement("p");
        let website = document.createElement("a");
        let image = document.createElement("img");
        name.textContent = member.name;
        address.textContent = member.address;
        number.textContent = member.number;
        website.textContent = member.website;
        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank")
        image.setAttribute("src", member.image);
        image.setAttribute("alt", `${member.name} logo`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "100");

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(website);
        card.appendChild(image);
        display.appendChild(card);
    });
}


GetBusinessInfo(url)