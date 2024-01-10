import { randomUUID } from "crypto"
import { Entity } from "../../core/entities/entity"
import { Student } from "./student"
import { UniqueEntityId } from "../../core/entities/unique-entity-id"


interface InstrutctorProps {
    nome: string
}

export class Instructor extends Entity<InstrutctorProps>{
    static create(props: InstrutctorProps, id?: UniqueEntityId){
        const question =  new Instructor(props, id)
    
        return question
      }
}