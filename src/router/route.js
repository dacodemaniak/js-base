export class Route {
    constructor() {
        this.path = ''
        this.controller = null
    }

    register(path, controller) {
        this.path = path
        this.controller = controller

        console.log(`Route was added : ${JSON.stringify(this)}`)
    }
}