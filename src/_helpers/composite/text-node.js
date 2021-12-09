import { Composer } from "./composer";

export class TextNode extends Composer {
    constructor(...args) {
        super()
        this.element = args[0]
    }
}