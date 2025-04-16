import Id from "./Id";

export interface EntityProps {
  id?: string
}

export default abstract class Entity<R, T extends EntityProps> {
  readonly id: Id
  readonly props: T

  constructor(props: T) {
    this.id = new Id(props.id)
    this.props = { ...props, id: this.id.value }
  }

  equals(newEntity: Entity<R, T>): boolean {
    return this.id.equals(newEntity?.id)
  }

  different(newEntity: Entity<R, T>): boolean {
    return !this.id.equals(newEntity?.id)
  }

  clone(newProps: T): R {
    return new (this.constructor as any)({ ...this.props, ...newProps })
  }
}