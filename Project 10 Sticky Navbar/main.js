const navbarEl = document.querySelector(".navbar")

window.addEventListener("scroll", () =>{
    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active")
    }else{
        navbarEl.classList.remove("active")
    }
})

const bottomContainerEl = document.querySelector(".bottom-container")



console.log(bottomContainerEl.offsetTop)