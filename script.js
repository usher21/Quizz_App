let questions = [
    {
        question: "Quel est le Meilleur Language de Programmation",
        answers: ["Java", "C", "Python", "JavaScript"],
        correct: "d"
    },
    {
        question: "Quel est le plus gros animal vivant",
        answers: ["Dauphin", "Baleine bleue", "ÉlÉphant d'Afrique", "Girafe"],
        correct: "b"
    },
    {
        question: "Quel est l'animal le plus rapide au monde",
        answers: ["Antilocapre", "Martinet Cafre", "Faucon pèlerin", "Harle huppé"],
        correct: "c"
    },
    {
        question: "Quelle propriété permettrait de superposer des élément HTML en CSS",
        answers: ["position", "display", "z-index", "flex"],
        correct: "c"
    }, {
        question: "Quelle propriété appliquée sur un élément permet de modifier l'ordre des éléments en les réagençant sans modifier le HTML",
        answers: ["flex-direction", "align-items", "order", "flex"],
        correct: "a"
    },
]

const title = document.querySelector('.title h3')
const header = document.querySelector('.title')
const nextButton = document.querySelector('.next')
const answerList = document.querySelector('.container .responses-list')

startQuiz()

let index = 0
let correctAnswer = 0

nextButton.addEventListener('click', () => {
    if (!hasChilds()) {
        generateQuestion()
        unCheckAnswer()
        nextButton.textContent = 'Suivant'
        return
    }

    if (!isCheckedAnswer()) {
        alert('Veuillez sélectionner une réponse !')
        return
    }

    let checkedAnswer = getCheckedAnswer()
    if (isCorrectAnswer(checkedAnswer[0]))
        correctAnswer++

    index++

    if (index < questions.length) {
        answerList.innerHTML = ''
        generateQuestion()
        unCheckAnswer()
    }

    if (index == questions.length)
        endQuiz()
})

/*--------------------------------------------------------------------------------------------------------------*/

function startQuiz() {
    nextButton.textContent = 'Commencer'
    title.textContent = `Commencer le Quizz`
    unCheckAnswer()
}

function endQuiz() {
    nextButton.textContent = 'Rejouer'
    title.textContent = `Vous avez trouvé ${correctAnswer}/${questions.length} questions.`
    resetQuiz()
}

function resetQuiz() {
    answerList.innerHTML = ''
    index = 0
    correctAnswer = 0
}

/*--------------------------------------------------------------------------------------------------------------*/

function getAnswers() {
    return document.querySelectorAll('input[type="radio"]')
}

function isCheckedAnswer() {
    return Array
        .from(getAnswers())
        .filter(answer => answer.checked)
        .length != 0
}

function hasChilds() {
    console.log(answerList);
    return answerList.children.length != 0
}

function getCheckedAnswer() {
    return Array
        .from(getAnswers())
        .filter(checkedElement => checkedElement.checked)
}

/*--------------------------------------------------------------------------------------------------------------*/

function generateQuestion() {
    title.textContent = questions[index].question + ' ?'
    let letterCode = 97
    for (let i = 0; i < questions[index].answers.length; i++) {
        let answerItem = createResponseItem(questions[index].answers[i], String.fromCharCode(letterCode))
        answerList.append(answerItem)
        letterCode++
    }
}

function unCheckAnswer() {
    getAnswers().forEach(answer => answer.checked = false)
}

function isCorrectAnswer(responseChecked) {
    return responseChecked.id == questions[index].correct
}

/*--------------------------------------------------------------------------------------------------------------*/

function createResponseItem(responseText, id) {
    const responseItem = createElement('li', { class: 'response-item' })
    const inputRadio = createElement('input', { 'type': "radio", 'name': "response", 'id': id })
    const labelForInput = createElement('label', { 'for': id }, responseText)

    responseItem.append(inputRadio)
    responseItem.append(labelForInput)

    return responseItem
}

function createElement(tagName, attributs = {}, content = '') {
    const element = document.createElement(tagName)
    for (const attribut in attributs) {
        element.setAttribute(attribut, attributs[attribut])
    }
    element.textContent = content
    return element
}

/*--------------------------------------------------------------------------------------------------------------*/