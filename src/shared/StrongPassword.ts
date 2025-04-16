import Errors from "@/constants/Errors"
import ErrorValidation from "@/error/ErrorValidation"

export default class StrongPassword {
  static readonly REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,256})/

  constructor(readonly value?: string) {
    if (!StrongPassword.isValid(value ?? '')) {
      ErrorValidation.throw(Errors.WEAK_PASSWORD)
    }
  }

  static isValid(pass: string): boolean {
    return this.REGEX.test(pass)
  }
}