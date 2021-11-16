// Questions
const questions = [{
  id : 0, 
  question: `What is JavaScript?`,
  answer: [{ text: "JavaScript is a scripting or programming language that allows to implement complex features on web pages", isCorrect: true },
  { text: "JavaScript is a scriptng or programming language that allows to implement complex coffee beans into a cup", isCorrect: false },
  { text: "A language used for describing the presentation of a document written in a markup languages such as HTML", isCorrect: false },
  { text: "Standard markup language", isCorrect: false },
  ]
},
{
  id:1,
  question: `Which is considered a string`,
  answer: [{ text: "[Hi my name is bob]", isCorrect: true },
  { text: "True or False?", isCorrect: false },
  { text: `["1","2","3"]`, isCorrect: false },
  { text: "None of the Above", isCorrect: false },
  ]
},
{
  question: ``,
  answer: [{ text: "", isCorrect: false },
  { text: "", isCorrect: false },
  { text: "", isCorrect: true },
  { text: "", isCorrect: false },
  ]
},
{
  question: ``,
  anser: [{ text: "", isCorrect: false },
  { text: "", isCorrect: false },
  { text: "", isCorrect: false },
  { text: "", isCorrect: true },
  ]
}
]
var id = 0
        

// // Setting the Start
// var start = true


const startButton = document.getElementById(`startBtn`)
const questionElem = document.getElementById(`questions`)
const answerBtnsElem = document.getElementById(`answerBtns`)

question.innerText = questions[id].question


startButton.addEventListener(`click`, startGame)
  

function startGame() {
  console.log(`started`)
  startBtn.classList.add('hide')
  title.classList.add('hide')
  questionContainer.classList.remove('hide')
  nextBtn.classList.remove('hide')

  const ans1 = document.getElementById (`ans1`)
  const ans2 = document.getElementById (`ans2`)
  const ans3 = document.getElementById (`ans3`)
  const ans4 = document.getElementById (`ans4`)

  ans1.innerText = questions[id].answer[0].text;
  ans2.innerText = questions[id].answer[1].text;
  ans3.innerText = questions[id].answer[2].text;
  ans4.innerText = questions[id].answer[3].text;
  
  ans1.value = questions[id].answer[0].isCorrect;
  ans2.value = questions[id].answer[1].isCorrect;
  ans3.value = questions[id].answer[2].isCorrect;
  ans4.value = questions[id].answer[3].isCorrect;

}

// function nextQuestion() {
//   showQuestion (currentQuestionIndex)
  
// }
// function showQuestion(question) {
//   questionElem.innerText = question.question
// }

// function selectAnswer() {

// }
  
  
