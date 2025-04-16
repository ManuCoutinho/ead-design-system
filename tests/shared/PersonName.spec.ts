import Errors from "@/constants/Errors";
import PersonName from "@/shared/PersonName";

describe('Person name class', () => {

  it('should throw many errors with empty name', () => {
    try {
      new PersonName()
    } catch (errors: any) {
      expect(errors[0].code).toBe(Errors.EMPTY_NAME)
      expect(errors[1].code).toBe(Errors.SMALL_NAME)
      expect(errors[2].code).toBe(Errors.NAME_WITHOUT_SURNAME)
    }

  });
  it('should throw an error with name less than 4 char', () => {
    expect(() => new PersonName('Le T')).toThrow(Errors.SMALL_NAME)
  });
  it('should throw an error with name greater than 120 char', () => {
    const bigName = 'Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga de Bragança e Habsburgo'
    expect(() => new PersonName(bigName)).toThrow(Errors.BIG_NAME)
  });

  it('should throw an error with name without surname', () => {
    expect(() => new PersonName('Sarah')).toThrow(Errors.NAME_WITHOUT_SURNAME)
  });

  it('should throw an error when name has special chars', () => {
    expect(() => new PersonName('Sarah Co0n%')).toThrow(Errors.NAME_CHARS_INVALID)
  });

  it('should create a name with two surnames', () => {
    const name = new PersonName('Jane Who Doe')
    expect(name.fullName).toBe('Jane Who Doe')
    expect(name.firstName).toBe('Jane')
    expect(name.lastName).toBe('Doe')
    expect(name.surnames).toEqual(['Who', 'Doe'])
  });

});