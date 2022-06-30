const containerEl = document.querySelector(".container")
const closeIconEl = document.querySelector(".close-icon")
const btnEl = document.querySelector(".btn")
const popupContainerEl = document.querySelector(".popup-container")

closeIconEl.addEventListener("click", () =>{
    containerEl.classList.remove("active")
    popupContainerEl.classList.add("active")
})
btnEl.addEventListener("click", () =>{
    containerEl.classList.add("active")
    popupContainerEl.classList.remove("active")
})
