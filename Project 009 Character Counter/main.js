const textareaEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById("total-counter")
const remainingCounterEl = document.getElementById("remaining-counter")
const submitEl = document.getElementById("submit")
const resetEl = document.getElementById("reset")


textareaEl.addEventListener("keyup", () =>{
    updateCounter()
})

// updateCounter()

window.onload = function(){
    textareaEl.value = ""
    totalCounterEl.innerText = textareaEl.value.length
    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}


resetEl.addEventListener("click", ()=> {
    textareaEl.value = ""
    updateCounter()
})

submitEl.addEventListener("click", ()=> {
    textareaEl.value = ""
    alert("Your text was submitted!")
    updateCounter()
})

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length
    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}

