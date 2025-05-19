import { renderHook } from '@testing-library/react';
import React, { createContext } from 'react';
import useDittoContext from '../use-ditto-context';

describe('useDittoContext', () => {
  it('should return the context value when used within a provider', () => {
    const TestContext = createContext<string>('');
    TestContext.displayName = 'TestContext';

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <TestContext.Provider value="test-value">{children}</TestContext.Provider>
    );

    const { result } = renderHook(() => useDittoContext(TestContext), { wrapper });

    expect(result.current).toBe('test-value');
  });

  it('should throw an error when used outside of a provider', () => {
    const TestContext = createContext<string>('');
    TestContext.displayName = 'TestContext';

    const render = () => renderHook(() => useDittoContext(TestContext));

    // eslint-disable-next-line max-len
    expect(render).toThrow('TestContextcontext is not defined. Make sure you are using the provider correctly.');
  });

  it('should work with complex objects', () => {
    type TestType = { name: string; age: number };
    const TestContext = createContext<TestType | null>(null);
    TestContext.displayName = 'TestContext';

    const testValue = { name: 'John', age: 30 };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <TestContext.Provider value={testValue}>{children}</TestContext.Provider>
    );

    const { result } = renderHook(() => useDittoContext(TestContext), { wrapper });

    expect(result.current).toEqual(testValue);
  });
}); 