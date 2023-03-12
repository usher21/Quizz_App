class QuestionManager {
    
    #questionContainer
    #questionTitle = null
    #responseItem = null
    #responseList = null
    
    constructor(question) {
        this.createQuestionContainer(question)

    }

    createQuestionContainer() {
        this.questionContainer = createElement('div', { class: 'container'})
        this.#questionList = this.createResponseList()
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

    createResponseList(question) {
        const responseContainer = createElement('div', { class: 'responses'})
        const responseList = createElement('ul', { class: 'responses-list'})

        let letterCode = 97

        for (const response of question.responses) {
            const responseItem = this.createResponseItem(response, letterCode++)
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
}

function createElement(tagName, attributs = {}, content = '') {
    const element = document.createElement(tagName)
    for (const attribut in attributs) {
        element.setAttribute(attribut, attributs[attribut])
    }
    element.textContent = content
    return element
}