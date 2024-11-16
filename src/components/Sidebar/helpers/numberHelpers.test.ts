import { describe, expect, it } from '../../../test/vitest-setup';
import { formatNumber } from './numberHelpers';

describe('formatNumber', () => {
  it('should return the number itself if less than 1000', () => {
    expect(formatNumber(999)).toBe(999);
    expect(formatNumber(0)).toBe(0);
    expect(formatNumber(500)).toBe(500);
  });

  it('should format numbers in thousands with "k"', () => {
    expect(formatNumber(1000)).toBe('1.0k');
    expect(formatNumber(1500)).toBe('1.5k');
    expect(formatNumber(999999)).toBe('999.9k');
  });

  it('should format numbers in millions with "m"', () => {
    expect(formatNumber(1000000)).toBe('1.0m');
    expect(formatNumber(1500000)).toBe('1.5m');
    expect(formatNumber(2000000)).toBe('2.0m');
  });

  it('should handle edge cases correctly', () => {
    expect(formatNumber(999999.9)).toBe('1000.0k');
    expect(formatNumber(1000000.1)).toBe('1.0m');
  });
});
