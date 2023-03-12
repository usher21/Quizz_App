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

const title = document.querySelector('.title h1')
const responses = document.querySelectorAll('input[type="radio"]')
const label = document.querySelectorAll('label')
const nextButton = document.querySelector('.next')

let index = 0

generateQuestion()

nextButton.addEventListener('click', () => {
    let responsesChecked = Array.from(responses).filter(radio => radio.checked)
    if (responsesChecked.length == 0) {
        alert('Veuillez séléctionné une réponse !')
        return
    }
    correct(responsesChecked[0])
    
    nextQuestion()
    generateQuestion()
})

function generateQuestion() {
    title.textContent = questions[index].question + ' ?'
    for (let i = 0; i < questions[index].responses.length; i++) {
        label[i].textContent = questions[index].responses[i]
    }
}

function correct(responseChecked) {
    console.log(responseChecked.id);
    if (responseChecked.id == questions[index].correct) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
}

function nextQuestion() {
    index++
}


