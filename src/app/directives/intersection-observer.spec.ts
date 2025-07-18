import { IntersectionObserver } from './intersection-observer';

describe('IntersectionObserver', () => {
  it('should create an instance', () => {
    const directive = new IntersectionObserver();
    expect(directive).toBeTruthy();
  });
});
