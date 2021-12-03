import { Contact } from "./models/contact";


document.addEventListener('DOMContentLoaded', (event) => {
    const contact = new Contact()
    contact
        .setLastName('Aubert')
        .setFirstName('Jean-Luc')
        .setOccupation('Teacher')
        .setCompany('Aélion')
    
    // 1st : Create a new tr element
    const row = document.createElement('tr')

    // 2nd : Create every td for every columns we need and place contents
    const td1 = document.createElement('td')
    td1.innerHTML = '&nbsp;'

    const td2 = document.createElement('td')
    td2.innerHTML = contact.getLastName()

    const td3 = document.createElement('td')
    td3.innerHTML = contact.getFirstName()

    const td4 = document.createElement('td')
    td4.innerHTML = contact.getOccupation()

    const td5 = document.createElement('td')
    td5.innerHTML = contact.getCompany()

    const td6 = document.createElement('td')
    td6.innerHTML = '&nbsp;'

    // 3rd : Add every td as child of the previous tr element
    row.appendChild(td1)
    row.appendChild(td2)
    row.appendChild(td3)
    row.appendChild(td4)
    row.appendChild(td5)
    row.appendChild(td6)

    // 4th : Add the whole tr to tbody of our table
    document.querySelector('tbody').appendChild(row)

    // Get rows number
    const nbRows = document.querySelectorAll('tbody tr').length
    document.getElementById('items-number').innerText = nbRows
    
    setTimeout(() => {
        document.querySelector('div.outer-splash').classList.add('hidden')
    }, 1000)
});