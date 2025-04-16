import Entity, { EntityProps } from "@/shared/Entity";
import Id from "@/shared/Id";

interface TestProps extends EntityProps {
  name?: string
  age?: number
}

class Test extends Entity<Test, TestProps> {
  readonly name: string
  readonly age: number
  constructor(props: TestProps) {
    super(props);
    this.name = props.name ?? ''
    this.age = props.age ?? 0
  }
}

describe('Entity abstract class', () => {
  it('should compare two different entities', () => {
    const e1 = new Test({ name: 'Sarah', age: 30 })
    const e2 = new Test({ name: 'Skynet', age: 12 })
    expect(e1.equals(e2)).toBeFalsy()
    expect(e1.different(e2)).toBeTruthy()
  });
  it('should compare two different entities with same id', () => {
    const id = Id.new.value
    const e1 = new Test({ id, name: 'Sarah', age: 30 })
    const e2 = new Test({ id, name: 'Skynet', age: 12 })
    expect(e1.equals(e2)).toBeTruthy()
    expect(e1.different(e2)).toBeFalsy()
  });

  it('should compare entities with undefined or null values', () => {
    const e1 = new Test({ name: 'Sarah', age: 30 })

    expect(e1.equals(undefined as any)).toBeFalsy()
    expect(e1.equals(null as any)).toBeFalsy()
    expect(e1.different(undefined as any)).toBeTruthy()
    expect(e1.different(null as any)).toBeTruthy()
  });


  it('should create a clone with new name', () => {
    const e1 = new Test({ name: 'Sarah', age: 30 })
    const clone = e1.clone({ name: 'Sarah Connor' })

    expect(clone.age).toBe(e1.age)
    expect(clone.name).toBe('Sarah Connor')
  });
});