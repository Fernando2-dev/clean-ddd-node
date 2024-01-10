import { randomUUID } from "crypto"
import { UniqueEntityId } from "./unique-entity-id"

export class Entity<Props> {
    private _id: UniqueEntityId
    protected props: Props

    get Id() {
        return this._id
    }

  protected constructor(props: Props, id?: UniqueEntityId) {
        this.props = props
        this._id = new UniqueEntityId()
    }
}