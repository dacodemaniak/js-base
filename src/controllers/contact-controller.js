export class ContactController {
    constructor() {
        this.dock = null
    }

    load(dock) {
        this.dock = dock

        fetch(
            './views/default.view.html'
        ).then((response) => response.text())
        .then((template) => {
            this.dock.innerHTML = template
            const h1 = this.dock.querySelector('h1')
            h1.innerText = 'Contact Form'
        })
    }

    render(content) {
        this.dock.appendChild(content)
    }
}