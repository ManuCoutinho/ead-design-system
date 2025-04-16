import Errors from "@/constants/Errors"
import Validator from "@/utils/Validator"

export default class PersonName {
  readonly name: string
  constructor(name?: string) {
    this.name = name?.trim() ?? ''

    const errors = Validator.join(
      Validator.notVoid(this.name, Errors.EMPTY_NAME),
      Validator.lessThan(this.name, 121, Errors.BIG_NAME),
      Validator.greaterThan(this.name, 4, Errors.SMALL_NAME),
      Validator.notVoid(this.name.split(' ')[1], Errors.NAME_WITHOUT_SURNAME),
      Validator.regex(this.name, /^[a-zA-ZÀ-ú'-\.\s]+$/, Errors.NAME_CHARS_INVALID)
    )

    if (errors) throw errors
  }

  get fullName() {
    return this.name
  }

  get firstName() {
    return this.name.split(' ')[0]
  }

  get surnames() {
    return this.name.split(' ').slice(1)
  }

  get lastName() {
    return this.name.split(' ').pop() as string
  }
}