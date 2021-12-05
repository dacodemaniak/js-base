import { ContactService } from "../services/contact-service";
import { RowHelper } from "./../_helpers/row-helper";
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

        for (let contact of contacts) {
            const row = new RowHelper()
            row
                .addColumn('&nbsp;')
                .addColumn(contact.getLastName())
                .addColumn(contact.getFirstName())
                .addColumn(contact.getOccupation())
                .addColumn(contact.getCompany())
                .addColumn('&nbsp;')
    
                
            // 4th : Add the whole tr to tbody of our table
            this._dock.querySelector('tbody').appendChild(row.buildRow())
        }

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