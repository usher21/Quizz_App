let questions = [
    {
        question: "Quel est le Meilleur Language de Programmation",
        responses: ["Java", "C", "Python", "JavaScript"],
        correct: "d"
    },
    {
        question: "Quel est le plus gros animal vivant",
        responses: ["Dauphin", "Baleine bleue", "ÉlÉphant d'Afrique", "Girafe"],
        correct: "b"
    },
    {
        question: "Quel est l'animal le plus rapide au monde",
        responses: ["Antilocapre", "Martinet Cafre", "Faucon pèlerin", "Harle huppé"],
        correct: "c"
    },
    {
        question: "Quelle propriété permettrait de superposer des élément HTML en CSS",
        responses: ["position", "display", "z-index", "flex"],
        correct: "c"
    }, {
        question: "Quelle propriété appliquée sur un élément permet de modifier l'ordre des éléments en les réagençant sans modifier le HTML",
        responses: [
            "flex-direction",
            "align-items",
            "order",
            "flex"
        ],
        correct: "a"
    },
]

const title = document.querySelector('.title h3')
const header = document.querySelector('.title')
const responses = document.querySelectorAll('input[type="radio"]')
const responsesContainer = document.querySelector('.responses')
const label = document.querySelectorAll('label')
const nextButton = document.querySelector('.next')
const container = document.querySelector('.container')

startQuiz()

let index = 0
let correctAnswer = 0

nextButton.addEventListener('click', () => {
    if (getComputedStyle(responsesContainer).display == 'none') {
        responsesContainer.style.display = 'block'
        nextButton.textContent = 'Suivant'
        generateQuestion()
        return
    }
    let responsesChecked = Array.from(responses).filter(radio => radio.checked)
    if (responsesChecked.length == 0) {
        alert('Veuillez séléctionné une réponse !')
        return
    }

    correct(responsesChecked[0])
    index++

    if (index < questions.length) {
        generateQuestion()
        unCheckAnswer()
    }

    if (index == questions.length) {
        nextButton.textContent = 'Rejouer'
        responsesContainer.style.display = 'none'
        title.textContent = `Vous avez trouvé ${correctAnswer}/${questions.length} questions.`
        index = 0
        correctAnswer = 0
    }
})

function generateQuestion() {
    title.textContent = questions[index].question + ' ?'
    for (let i = 0; i < questions[index].responses.length; i++) {
        label[i].textContent = questions[index].responses[i]
    }
    
}

function startQuiz() {
    nextButton.textContent = 'Commencer'
    responsesContainer.style.display = 'none'
    title.textContent = `Commencer le Quizz`
    unCheckAnswer()
}

function unCheckAnswer() {
    responses.forEach(answer => answer.checked = false )
}

function correct(responseChecked) {
    if (responseChecked.id == questions[index].correct) {
        correctAnswer++
    }
}

function hasChild() {
    let children = container.children
    let hasChild = false
    for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains('responses')) {
            hasChild = true
        }
    }
    return hasChild
}