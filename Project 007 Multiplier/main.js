const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionEL  =document.getElementById("question")
const formEl = document.getElementById("form")
const inputEl = document.getElementById("input")

const scoreEl = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerText = `Score: ${score}`

questionEL.innerText = `What is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2;

formEl.addEventListener("submit", () =>{
    const userAnswer = +inputEl.value;
    if (userAnswer === correctAns){
        score++;
        updateLocalStorage()
    } else {
        score--;
        updateLocalStorage()
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}

