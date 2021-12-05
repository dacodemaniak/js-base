import { Route } from "./route";

export class Router {
    constructor() {
        this.router = new Map();
    }

    register(path, controller) {
        const route = new Route()
        route.register(path, controller)

        console.log(`Add ${JSON.stringify(route)}`)
        this.router.set(route.path, controller)
    }

    navigate() {
        let dock = document.querySelector('appDock')

        const uri = location.hash.slice(1) || '/'

        const controller = this.router.get(uri)

        if (dock && controller) {
            controller.load(dock)
        }
    }
}