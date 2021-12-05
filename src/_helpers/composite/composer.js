export class Composer {
    constructor() {
        this.element = null
        this.children = []
    }

    add(node) {
        this.children.push(node)
    }

    hasChildren() {
        return this.children.length
    }

    getChildren() {
        return this.children
    }
}