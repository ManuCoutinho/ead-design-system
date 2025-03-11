import Validator from "@/utils/Validator";

describe('Validator class', () => {
  it('should return null with text not null', () => {
    const test = Validator.notNull('foo bar', 'invalid')
    expect(test).toBeNull()
  });


  it('should return error with null text', () => {
    const msgError = 'invalid text'
    const error = Validator.notNull(null, msgError)
    expect(error?.code).toBe(msgError)
  });

  it('should return error without text', () => {
    const msgError = 'invalid text'
    const error = Validator.notVoid('    ', msgError)
    expect(error?.code).toBe(msgError)
  });

  it('should return error with undefined value', () => {
    const msgError = 'invalid text'
    const error = Validator.notVoid(undefined, msgError)
    expect(error?.code).toBe(msgError)
  });

  it('should return null with a valid text', () => {
    const msgError = 'invalid text'
    const error = Validator.notVoid('text', msgError)
    expect(error).toBeNull()
  });

  it('should return null with text less than 6 char', () => {
    const msgError = 'invalid text'
    const error = Validator.lessThan('foo', 6, msgError)
    expect(error).toBeNull()
  });

  it('should return error with text greater than max size', () => {
    const msgError = 'invalid text'
    const error = Validator.lessThan('foobars', 6, msgError)
    expect(error?.code).toBe(msgError)
  });

  it('should return null with text greater than 4 char', () => {
    const msgError = 'invalid text'
    const error = Validator.greaterThan('foobar', 4, msgError)
    expect(error).toBeNull()
  });
  it('should return error with text less than min size', () => {
    const msgError = 'invalid text'
    const error = Validator.greaterThan('foo', 4, msgError)
    expect(error?.code).toBe(msgError)
  });

  it('should validate regex and return null - only numbers', () => {
    const error = Validator.regex('123445566', /\d{9}/, 'error')
    expect(error).toBeNull()
  });

  it('should validate regex and return error - only numbers', () => {
    const msgError = 'invalid values'
    const error = Validator.regex('1234455A6', /\d{9}/, msgError)
    expect(error?.code).toBe(msgError)
  });

  it('should validate a invalid email and return false', () => {
    const error = Validator.isEmailValid('1234455A6')
    expect(error).toBeFalsy()
  });

  it('should validate a valid email and return true', () => {
    const error = Validator.isEmailValid('email@email.com')
    expect(error).toBeTruthy()
  });

  it('should return a list of errors', () => {
    const errors = Validator.join(Validator.notNull(null, 'error 1'),
      Validator.notNull(null, 'error 2'),
      Validator.notNull(null, 'error 3'),
      Validator.notNull(null, 'error 4')
    )
    expect(errors?.map((e) => e.code)?.join(', ')).toBe('error 1, error 2, error 3, error 4')
  });

  it('should return null when no errors', () => {
    const errors = Validator.join(
    )
    expect(errors).toBeNull()
  });


});