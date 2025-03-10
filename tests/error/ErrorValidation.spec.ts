import Errors from "@/constants/Errors";
import ErrorValidation from "@/error/ErrorValidation";

describe('ErrorValidation class', () => {
  it('should throw an error', () => {
    expect(() => ErrorValidation.throw('Error', 'Value')).toThrow('Error')
  });

  it('should create an error with code and value', () => {
    const error = new ErrorValidation({
      code: Errors.INVALID_EMAIL,
      value: 'dummy value'
    })
    expect(error.code).toBe(Errors.INVALID_EMAIL)
    expect(error.value).toBe('dummy value')
  });

  it('should create an error with code, extras and value', () => {
    const error = new ErrorValidation({
      code: Errors.SMALL_NAME,
      value: 'bar',
      extras: { min: 4 }
    })
    expect(error.code).toBe(Errors.SMALL_NAME)
    expect(error.value).toBe('bar')
    expect(error.extras.min).toEqual(4)
  });
  it('should create an error without code', () => {
    const error = new ErrorValidation()
    const e2 = ErrorValidation.new()
    expect(error.code).toBe(Errors.UNKNOWN)
    expect(e2.code).toBe(Errors.UNKNOWN)

  });
});