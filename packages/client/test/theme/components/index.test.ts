import * as components from '~/theme/components';

jest.mock('~/theme/components/Col', () => true);
jest.mock('~/theme/components/Container', () => true);
jest.mock('~/theme/components/Content', () => true);
jest.mock('~/theme/components/Input', () => true);
jest.mock('~/theme/components/Row', () => true);

describe('components object test', () => {
  it('should have Col component', () => {
    expect(components.Col).toBe(true);
  });

  it('should have Container component', () => {
    expect(components.Container).toBe(true);
  });

  it('should have Content component', () => {
    expect(components.Content).toBe(true);
  });

  it('should have Input component', () => {
    expect(components.Input).toBe(true);
  });

  it('should have Row component', () => {
    expect(components.Row).toBe(true);
  });
});
