export class RowHelper {
    constructor() {
        this.columns = []
    }

    addColumn(content) {
        const column = document.createElement('td')
        column.innerHTML = content
        
        this.columns.push(column)

        return this
    }

    buildRow() {
        const row = document.createElement('tr')

        for (let column of this.columns) {
            row.appendChild(column)
        }

        return row
    }
}