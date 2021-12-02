

document.addEventListener('DOMContentLoaded', (event) => {
    // document <=> Document Object Model (DOM)
    const dock = document.querySelector('[appDock]')
    
    let myVar = 'Je suis myVar'
    myVar = 256

    let myName = 'Jean-Luc'
    
    const names = [
        'Jean-Luc',
        'Isaac',
        'Rémy',
        'Julien',
        'Abdel'
    ] // Array object
    names.push('Nesibe')

    // <ul>
    //  <li>...</li>
    //  ...
    // </ul>
    // Loop old school : for
    myName = '<ul>'
    for (let index = 0; index < names.length; index++) {
        myName += '<li>' + names[index] + '</li>'
    }
    myName += '</ul>'

    // Loop for of
    myName = '<ul>'
    for (let name of names) {
        myName += '<li>' + name + '</li>'
    }
    myName += '</ul>'

    // Loop forEach
    myName = '<ul>'
    names.forEach((item) => {
        myName += '<li>' + item + '</li>'
    })
    myName += '</ul>'

    // while
    myName = '<ol>'
    let index = 0
    while (index < names.length) {
        myName += '<li>' + names[index] + '</li>'
        index++
    }
    myName += '</ol>'

    index = 0
    myName = '<ol>'
    do {
        myName += '<li>' + names[index] + '</li>'
        index++
    } while (index < names.length)
    myName += '</ol>'

    dock.innerHTML = myName

    // Make Rémy red
    const liNames = document.querySelectorAll('li')
    
    for (let liName of liNames) {
        const name = liName.innerText
        if (name === 'Rémy') {
            liName.classList.add('is-remy')
        }
    }
    dock.innerHTML += '<p>' + liNames.length + ' items</p>'

    // Get the red-one and green-one button
    const colorize = (name, ...args) => {
        const rows = [... document.querySelectorAll('li')]
        const row = rows.find((item) => item.innerText === name)
        let cssClass = args.length >= 1 ? args[0] : 'is-red'
        row.classList.add(cssClass)
    }

    const redOne = document.getElementById('red-one')
    const greenOne = document.getElementById('green-one')

    redOne.addEventListener(
        'click', // Event type
        (event) => {
            const name = redOne.getAttribute('attr-name')
            colorize(name)
        } // Callback function when event occurs
    )

    greenOne.addEventListener(
        'click', // Event type
        (event) => {
            const name = greenOne.getAttribute('attr-name')
            colorize(name, 'is-green')
        } // Callback function when event occurs
    )

    document.querySelector('ol').addEventListener(
        'click',
        (event) => {
            const row = event.target
            if (row.tagName === 'LI') {
                if (row.classList.length > 0) {
                    row.classList.remove('is-red', 'is-green')
                }
            }
        }
    )
});