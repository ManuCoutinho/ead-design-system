import Errors from "@/constants/Errors";
import StrongPassword from "@/shared/StrongPassword";

describe('StrongPassword class', () => {
  it('should throw an error when password have only numbers', () => {
    expect(() => new StrongPassword('12345666')).toThrow(Errors.WEAK_PASSWORD)
  });

  it('should throw an error when password have only letters', () => {
    expect(() => new StrongPassword('suaSnha')).toThrow(Errors.WEAK_PASSWORD)
  });

  it('should throw an error when password have less than 8 char', () => {
    expect(() => new StrongPassword('Senha@1')).toThrow(Errors.WEAK_PASSWORD)
  });
  it('should throw an error when password is empty or undefined', () => {
    expect(() => new StrongPassword('')).toThrow(Errors.WEAK_PASSWORD)
    expect(() => new StrongPassword(undefined)).toThrow(Errors.WEAK_PASSWORD)
  });

  it('should return true for a valid password', () => {
    const pass = 'Senha@123'
    expect(new StrongPassword(pass).value).toBe(pass)
  });
});