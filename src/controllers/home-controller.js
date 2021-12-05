export class HomeController {
    
    constructor() {}

    load(dock) {
        this._dock = dock
        this._getView()
            .then((response) => response.text())
            .then((template) => {
                this._render(template)
            })
    }

    _render(template) {
        this._dock.innerHTML = template;
    }

    _getView() {
        return fetch(
            './views/home.view.html'
        )
    }
}