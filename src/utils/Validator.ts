import ErrorValidation from "@/error/ErrorValidation"

export default class Validator {

  static join(...errors: (ErrorValidation | null)[]): ErrorValidation[] | null {
    const errorsFiltered = errors.filter((e) => e !== null)
    return errorsFiltered.length > 0 ? errorsFiltered : null
  }

  static notNull(value: any, error: string): ErrorValidation | null {
    return value != null ? null : ErrorValidation.new(error, value)
  }

  static notVoid(value: string | null | undefined, error: string): ErrorValidation | null {
    if (Validator.notNull(value, error)) return ErrorValidation.new(error)
    return value!.trim() !== '' ? null : ErrorValidation.new(error, value)
  }

  static lessThan(value: string | any[], length: number, error: string): ErrorValidation | null {
    return value.length < length ? null : ErrorValidation.new(error, value)
  }

  static greaterThan(value: string | any[], minLength: number, error: string): ErrorValidation | null {
    return value.length > minLength ? null : ErrorValidation.new(error, value)
  }

  static regex(value: string, regex: RegExp, error: string): ErrorValidation | null {
    return regex.test(value) ? null : ErrorValidation.new(error, value)
  }

  static isEmailValid(email: string): boolean {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    //[^<>()[\]\.,;:\s@\"] -> valida segmento antes do @
    return regex.test(email)
  }
}