// Quiz App
// Array of objects
const data = [
    {
        title: "What is the use of HTML?",
        A: "To develop frontend",
        B: "To clean utensils",
        C: "Both A & B",
        D: "None of the above",
        Answer: "To develop frontend"
    },
    {
        title: "What is the use of CSS?",
        A: "To develop games",
        B: "To clean utensils",
        C: "To style the website",
        D: "None of the above",
        Answer: "To style the website"
    },
    {
        title: "What is 10 + 20?",
        A: 30,
        B: -20,
        C: 50,
        D: "None of the above",
        Answer: 30
    }

]

const myH1 = document.querySelector("h1")
const btn1 = document.querySelector("#first")
const btn2 = document.querySelector("#second")
const btn3 = document.querySelector("#third")
const btn4 = document.querySelector("#fourth")

const nextButton = document.querySelector("#next")
const submitButton = document.querySelector("#submit")

let index = 0

function loadQuestion(dataa) {
    if (index < data.length - 1) {
        // questions are still available
        // Logic to hide submit button
        submitButton.hidden = true
        nextButton.hidden = false
    } else {
        // last question
        // logic to hide next button
        // and make submit button visible
        nextButton.hidden = true
        submitButton.hidden = false
    }

    myH1.textContent = dataa.title
    btn1.textContent = dataa.A
    btn2.textContent = dataa.B
    btn3.textContent = dataa.C
    btn4.textContent = dataa.D


}

loadQuestion(data[index])

let score = 0

let allButtons = document.querySelectorAll(".option")
let myScore = document.querySelector("#score")


// allButtons = [ 1st, 2nd, 3rd, 4th ] exactly an array (Type of an array (NodeList))
allButtons.forEach(function (i) {
    i.addEventListener("click", function (info) {
        // Highlight clicked button
        // i.style.backgroundColor = "green"
        // We need to extract the option information
        let selectedAnswer = info.target.innerText
        if (data[index].Answer == selectedAnswer) {
            // It means user has selected the correct answer
            score++
        }
    })
})

submitButton.addEventListener("click", function () {
    myScore.textContent = `Score is:${score}`
})

nextButton.addEventListener("click", function () {



    // go to the next question one by one
    index++
    loadQuestion(data[index])

    // if index = ?, we can conclude that last question is reached

})

// Once we reach the last question we have to display submit button
