const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (question = correct) {
    location.href = "https://www.google.com/search?q=you+got+it+right&safe=strict&rlz=1C5CHFA_enGB817GB817&ei=0VW1YIvON4G4kwWAg4Mw&oq=you+got+it+right&gs_lcp=Cgdnd3Mtd2l6EAMyBQguEJMCMgIILjICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgkIABBDEEYQ-QE6BAgAEEM6CAguEJECEJMCOgUIABCRAjoECC4QQzoECAAQCjoFCC4QkQJQzZkBWOnQAWDg0wFoAnACeACAAbUBiAHrEJIBBDEwLjmYAQCgAQGqAQdnd3Mtd2l6sAEAwAEB&sclient=gws-wiz&ved=0ahUKEwjL-oim7_TwAhUB3KQKHYDBAAYQ4dUDCA4&uact=5"
  } else {
    location.href = "https://www.google.com/search?q=you+got+it+wrong&safe=strict&rlz=1C5CHFA_enGB817GB817&ei=lFW1YPu2Do_TsAepkLTYBg&oq=you+got+it+wrong&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjoHCAAQRxCwA1DWBFiyF2CQHmgAcAN4AIAByAGIAb4MkgEFMy44LjGYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=gws-wiz&ved=0ahUKEwj70NSI7_TwAhWPKewKHSkIDWsQ4dUDCA4&uact=5"
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'How far is Jupiter from the Sun? (in million km)?',
    answers: [
      { text: '778.5', correct: true },
      { text: '782.6', correct: false },
      { text: '790.2', correct: false }
    ]
  },
]