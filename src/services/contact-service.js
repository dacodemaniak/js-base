import { ContactRepository } from "../repositories/contact-repository"

export class ContactService {
    constructor() {
        this.contacts = []
    }

    findAll() {
        const repository = new ContactRepository()
        return repository.findAll()
    }
}