import { BROWSER_STORAGE } from './storage';

describe('Storage', () => {
  it('should create an instance', () => {
    expect(new BROWSER_STORAGE()).toBeTruthy();
  });
});
