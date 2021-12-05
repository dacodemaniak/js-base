import { ContactService } from "../services/contact-service";
import { TableBuilder } from "../_helpers/builder/table-builder";
import { Column } from "../_helpers/composite/column";
import { Composer } from "../_helpers/composite/composer";
import { Row } from "../_helpers/composite/row";
import { TextNode } from "../_helpers/composite/text-node";
export class HomeController {
    
    constructor() {
        this.service = new ContactService()
    }

    load(dock) {
        this._dock = dock
        this._getView()
            .then((response) => response.text())
            .then((template) => {
                this._render(template)
            })
    }

    _render(template) {
        this._dock.innerHTML = template

        const contacts = this.service.findAll()

        const composer = new Composer()

        for (let contact of contacts) {
            const row = new Row()
            
            let col = new Column()
            col.add(new TextNode(' '))
            row.add(col)

            col = new Column()
            col.add(new TextNode(contact.getLastName()))
            row.add(col)

            col = new Column()
            col.add(new TextNode(contact.getFirstName()))
            row.add(col)

            col = new Column()
            col.add(new TextNode(contact.getOccupation()))
            row.add(col)

            col = new Column()
            col.add(new TextNode(contact.getCompany()))
            row.add(col)

            col = new Column()
            col.add(new TextNode(' '))
            row.add(col)

            composer.add(row)
        }

        // 4th : Add the whole tr to tbody of our table
        const builder = new TableBuilder(composer)
        const nodes = builder.build()
        this._dock.querySelector('tbody').appendChild(nodes)

        // Get rows number
        const nbRows = this._dock.querySelectorAll('tbody tr').length
        console.log(`Got ${nbRows} rows`)
        this._dock.querySelector('#items-number').innerText = nbRows
    }

    _getView() {
        return fetch(
            './views/home.view.html'
        )
    }
}