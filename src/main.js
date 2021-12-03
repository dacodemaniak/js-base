import { Contact } from "./models/contact";
import { RowHelper } from "./_helpers/row-helper";


document.addEventListener('DOMContentLoaded', (event) => {
    const contact = new Contact()
    contact
        .setLastName('Aubert')
        .setFirstName('Jean-Luc')
        .setOccupation('Teacher')
        .setCompany('Aélion')
    
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

    // Get rows number
    const nbRows = document.querySelectorAll('tbody tr').length
    document.getElementById('items-number').innerText = nbRows

    setTimeout(() => {
        document.querySelector('div.outer-splash').classList.add('hidden')
    }, 1000)
});