import { TextNode } from "../composite/text-node"

export class TableBuilder {
    constructor(composer) {
        this.composer = composer
        this.builder = document.querySelector('tbody')
    }

    build() {
        if (this.composer.element === null) {
            if (this.composer.hasChildren()) {
                // Every children is a composer itself
                for (let composer of this.composer.getChildren()) {
                    this.builder.appendChild(new TableBuilder(composer).build())
                    console.log(`Builder is ${JSON.stringify(this.builder)}`)
                }
            } else {
                console.log(`And end node ${JSON.stringify(this.composer)}`)
            }
        } else {
            if (this.composer.hasChildren()) {
                this.builder = document.createElement(this.composer.element)
                for (let composer of this.composer.getChildren()) {
                    const builder = new TableBuilder(composer)
                    console.log(`About to build : ${JSON.stringify(builder)}`)
                    this.builder.appendChild(builder.build())
                }
            } else {
                console.log(`What to do with ${JSON.stringify(this.composer)}`)
                return document.createTextNode(this.composer.element)
            }
        }
        return this.builder
    }

}