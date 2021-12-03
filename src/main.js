import { Contact } from "./models/contact";
import { ContactService } from "./services/contact-service";
import { RowHelper } from "./_helpers/row-helper";


document.addEventListener('DOMContentLoaded', (event) => {
    const service = new ContactService()

    const contacts = service.findAll()
    
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
        document.querySelector('tbody').appendChild(row.buildRow())
    }



    // Get rows number
    const nbRows = document.querySelectorAll('tbody tr').length
    document.getElementById('items-number').innerText = nbRows

    setTimeout(() => {
        document.querySelector('div.outer-splash').classList.add('hidden')
    }, 1000)
});