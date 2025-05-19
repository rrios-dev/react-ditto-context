import React, { createContext } from 'react';
import { render } from '@testing-library/react';
import DittoContextProvider from '../ditto-context-provider';

describe('DittoContextProvider', () => {
  it('should render children with provided context value', () => {
    const TestContext = createContext<string>('');
    const testValue = 'test-value';
    const testChild = 'Test Child';

    const { container } = render(
      <DittoContextProvider context={TestContext} value={testValue}>
        {testChild}
      </DittoContextProvider>,
    );

    expect(container.textContent).toBe(testChild);
  });

  it('should work with complex objects', () => {
    type TestType = { name: string; age: number };
    const TestContext = createContext<TestType | null>(null);
    const testValue = { name: 'John', age: 30 };
    const testChild = 'Test Child';

    const { container } = render(
      <DittoContextProvider context={TestContext} value={testValue}>
        {testChild}
      </DittoContextProvider>,
    );

    expect(container.textContent).toBe(testChild);
  });

  it('should update context value when value prop changes', () => {
    const TestContext = createContext<string>('');
    const initialValue = 'initial';
    const updatedValue = 'updated';
    const testChild = 'Test Child';

    const { container, rerender } = render(
      <DittoContextProvider context={TestContext} value={initialValue}>
        {testChild}
      </DittoContextProvider>,
    );

    expect(container.textContent).toBe(testChild);

    rerender(
      <DittoContextProvider context={TestContext} value={updatedValue}>
        {testChild}
      </DittoContextProvider>,
    );

    expect(container.textContent).toBe(testChild);
  });
}); 