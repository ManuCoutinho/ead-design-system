import Errors from "@/constants/Errors"

export interface ErrorValidationProps {
  code?: string
  value?: any
  extras?: object
}

export default class ErrorValidation extends Error {
  readonly code: string
  readonly value?: any
  readonly extras: any

  constructor(readonly props?: ErrorValidationProps) {
    super(props?.code ?? Errors.UNKNOWN)
    this.code = props?.code ?? Errors.UNKNOWN
    this.value = props?.value
    this.extras = props?.extras
  }

  static new(code?: string, value?: any, extras?: any): ErrorValidation {
    return new ErrorValidation({ code, value, extras })
  }

  static throw(code?: string, value?: any, extras?: any): never {
    throw new ErrorValidation({ code, value, extras })
  }
}