const quizData = [
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cental Store Sheets",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Many Languages",
    d: "Hyperloop Marks Language",
    correct: "a",
  },
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "javascript",
    correct: "d",
  },
  {
    question: "What language was adopted first ",
    a: "Swift",
    b: "Python",
    c: "Javascript",
    d: "none of the above",
    correct: "b",
  },


];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const startBtn = document.getElementById(`start`)

const timer = document.getElementById(`timer`)
const timeCounter = document.getElementById(`timeCounter`)

let currentQuiz = 0
let score = 0
let count = 75



startBtn.addEventListener(`click`, () => {
  startBtn.classList.add(`hide`)
  questionContainer.classList.remove(`hide`)
  submit.classList.remove(`hide`)
  timeCounter.classList.remove(`hide`)
  loadQuiz()
  gameTime()

})
function gameTime() {

  var timeinterval = setInterval(function () {
    timer.innerText = count
    count--;
  }, 1000);

}


loadQuiz()

function loadQuiz() {

  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}


submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    } else {
      count = count - 15
    }
    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      
      quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <h2> <input type="text" class="form-control" placeholder="Enter your initials:"
          id="inputScore"> </h2>
          <button id="btnScore">Submit</button>
          <hr>
           
           <button onclick="location.reload()">Reload</button>
           `
    }
  }
})