import { Route } from "./route";

export class Router {
    constructor() {
        this.router = new Map();
    }

    register(path, controller) {
        const route = new Route()
        route.register(path, controller)
        this.router.set(route.path, controller)
    }

    navigate() {
        const dock = document.querySelector('appDock')

        // Remove all previous nodes into dock
        let child = dock.lastChild
        while (child) {
            dock.removeChild(child)
            child = dock.lastChild
        }

        const uri = location.hash.slice(1) || '/'

        const controller = this.router.get(uri)

        if (dock && controller) {
            controller.load(dock)
        }
    }
}