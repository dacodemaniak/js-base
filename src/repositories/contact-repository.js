import { contacts } from "../fake-datas/fake-datas";
import { Contact } from './../models/contact'

export class ContactRepository {
    findAll() {
        const entities = []

        for (let item of contacts) {
            const entity = new Contact().deserialize(item)
            entities.push(entity)
        }

        return entities
    }
}