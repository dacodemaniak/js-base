export class DefaultController {
    constructor() {
        this.dock = null
    }

    load(dock) {
        this.dock = dock

        const title = document.createElement('h1')
        title.innerText = 'Hello my CRM'

        this.render(title)

    }

    render(content) {
        this.dock.appendChild(content)
    }
}