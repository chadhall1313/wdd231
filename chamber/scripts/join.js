const npOpen = document.querySelector("#np-show");
const npModal = document.querySelector("#np-details");

npOpen.addEventListener("click", () => {
    npModal.showModal();
})

const npClose = document.querySelector("#np-close");
npClose.addEventListener("click", () => {
    npModal.close()
})


const bronzeOpen = document.querySelector("#bronze-show");
const bronzeModal = document.querySelector("#bronze-details");

bronzeOpen.addEventListener("click", () => {
    bronzeModal.showModal();
})

const bronzeClose = document.querySelector("#bronze-close");
bronzeClose.addEventListener("click", () => {
    bronzeModal.close()
})


const silverOpen = document.querySelector("#silver-show");
const silverModal = document.querySelector("#silver-details");

silverOpen.addEventListener("click", () => {
    silverModal.showModal();
})

const silverClose = document.querySelector("#silver-close");
silverClose.addEventListener("click", () => {
    silverModal.close()
})



const goldOpen = document.querySelector("#gold-show");
const goldModal = document.querySelector("#gold-details");

goldOpen.addEventListener("click", () => {
    goldModal.showModal();
})

const goldClose = document.querySelector("#gold-close");
goldClose.addEventListener("click", () => {
    goldModal.close()
})


