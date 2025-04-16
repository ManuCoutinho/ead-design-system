import Errors from "@/constants/Errors";
import Email from "@/shared/Email";

describe('Email class', () => {
  it('should validate a invalid email and return false', () => {
    const error = Email.isValid('1234455A6')
    expect(error).toBeFalsy()
  });

  it('should validate a valid email and return true', () => {
    const error = Email.isValid('email@email.com')
    expect(error).toBeTruthy()
  });

  it('should create a new email and return the entity', () => {
    const email = new Email('email@email.com')
    expect(email.value).toBe('email@email.com')
    expect(email.user).toBe('email')
    expect(email.domain).toBe('email.com')
  });

  it('should throw an error with invalid or empty email', () => {
    expect(() => new Email('')).toThrow(Errors.INVALID_EMAIL)
    expect(() => new Email('email@email')).toThrow(Errors.INVALID_EMAIL)
  });
  it('should throw an error with undefined value', () => {
    expect(() => new Email(undefined)).toThrow(Errors.INVALID_EMAIL)
  });
});