import Entity, { EntityProps } from '@/shared/Entity'
import PersonName from '@/shared/PersonName'

export interface UserProps extends EntityProps {
  name?: string
}

export default class User extends Entity<User, UserProps> {
  readonly name: PersonName

  constructor(props: UserProps) {
    super(props)

    this.name = new PersonName(props.name)
  }
}