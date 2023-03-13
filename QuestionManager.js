export class QuestionManager {
    
    #questionContainer = null
    #questionTitle = null
    #responseItem = null
    #responseList = null
    #button = null
    
    constructor(question) {
        this.createQuestionContainer(question)
    }

    createQuestionContainer(question, buttonContent) {
        this.questionContainer = createElement('div', { class: 'container'})
        this.#questionTitle = this.createTitle(question.question)
        this.#questionList = this.createResponseList(question.answers)
        this.#button = this.createNextButton(buttonContent)
        this.appendElementsTo(this.#questionContainer)
    }

    createTitle(title) {
        const titleContainer = createElement('div', {class: 'title'})
        const title = createElement('h1', {}, question.question)
        titleContainer.append(title)

        return titleContainer
    }

    createResponseItem(responseText, id) {
        const responseItem = createElement('li', {class: 'response-item'})
        const inputRadio = createElement('input', { 'type': "radio", 'name': "response", 'id': id })
        const labelForInput = createElement('label', { 'for': id }, responseText)

        responseItem.append(inputRadio)
        responseItem.append(labelForInput)

        return responseItem
    }

    createResponseList(answers) {
        const responseContainer = createElement('div', { class: 'responses'})
        const responseList = createElement('ul', { class: 'responses-list'})

        let letterCode = 97

        for (const answer of answers) {
            const responseItem = this.createResponseItem(answer, letterCode++)
            responseList.append(responseItem)
        }

        responseContainer.append(responseList)

        return responseContainer
    }

    createNextButton(content) {
        const buttonContainer = createElement('div', { class: 'button-container'})
        const button = createElement('div', { class: 'next' }, content)
        buttonContainer.append(button)
        return buttonContainer
    }

    appendElementsTo(parentElement) {
        parentElement.append(this.#questionTitle)
        parentElement.append(this.#responseList)
        parentElement.append(this.#button)
    }
}

function createElement(tagName, attributs = {}, content = '') {
    const element = document.createElement(tagName)
    for (const attribut in attributs) {
        element.setAttribute(attribut, attributs[attribut])
    }
    element.textContent = content
    return element
}