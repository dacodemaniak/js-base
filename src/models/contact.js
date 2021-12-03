export class Contact {
    constructor() {
        this.lastName = ''
        this.firstName = ''
        this.occupation = ''
        this.company = ''
    }

    setLastName(name) {
        this.lastName = name
        return this
    }

    getLastName() {
        return this.lastName
    }

    setFirstName(name) {
        this.firstName = name
        return this
    }

    getFirstName() {
        return this.firstName
    }

    setOccupation(occupation) {
        this.occupation = occupation
        return this
    }

    getOccupation() {
        return this.occupation
    }

    setCompany(company) {
        this.company = company
        return this
    }

    getCompany() {
        return this.company
    }

    deserialize(backendDatas) {
        Object.assign(this, backendDatas)

        return this
    }
}