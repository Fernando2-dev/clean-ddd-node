import { randomUUID } from "crypto"
import { Slug } from "./value-object/slug"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id"
import { Optional } from "../../core/types/optional"

interface QuestionProps {
    title: string
    content: string
    authorId: UniqueEntityId
    slug: Slug
    bestAnswerId?: UniqueEntityId
    createdAt: Date
    updateadAt?: Date
}

export class Question extends Entity<QuestionProps> {
  static create(props: Optional<QuestionProps, 'createdAt'>, id?: UniqueEntityId){
    const question =  new Question({
        ...props,
        createdAt: new Date()
    }, id)

    return question
  }
}