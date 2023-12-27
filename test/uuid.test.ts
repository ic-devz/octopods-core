import { Uuid } from '../src/id/uuid-id';

describe('uuid', () => {
  it('make new uuid', () => {
    let newId = Uuid.next();
    expect(newId).toBeInstanceOf(Uuid);
  });
});
