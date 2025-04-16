import Errors from "@/constants/Errors"
import ErrorValidation from "@/error/ErrorValidation"

export default class Email {
  //[^<>()[\]\.,;:\s@\"] -> valida segmento antes do @
  static readonly REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  readonly value: string

  constructor(value?: string) {
    this.value = value?.trim() ?? ''
    if (!Email.isValid(this.value)) {
      ErrorValidation.throw(Errors.INVALID_EMAIL)
    }

  }
  static isValid(email: string): boolean {
    return this.REGEX.test(email)
  }

  get user(): string {
    return this.value.split('@')[0]
  }

  get domain(): string {
    return this.value.split('@')[1]
  }
}