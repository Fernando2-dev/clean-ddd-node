import { randomUUID } from "crypto"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id"

interface StudentProps {
    nome: string
}

export class Student extends Entity<StudentProps> {
    static create(props: StudentProps, id?: UniqueEntityId){
        const question =  new Student(props, id)
    
        return question
      }
}