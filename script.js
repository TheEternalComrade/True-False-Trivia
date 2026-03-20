const question = document.getElementById("question")
const trueBtn = document.getElementById("truebtn")
const falseBtn = document.getElementById("falsebtn")
const result = document.getElementById("result")
const newQuestionBtn = document.getElementById("newquestionbtn")

const questions = ["The moon is made of cheese", "A penny is worth 1 cent", "Geese are evil"]
const answers = [true,false,true ]

let ranInt

trueBtn.addEventListener("click", trueSelected)
falseBtn.addEventListener("click", falseSelected)
newQuestionBtn.addEventListener("click", newQuestion)

