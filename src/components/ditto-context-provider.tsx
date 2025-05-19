'use client';

export interface DittoContextProviderProps<ContextData> {
  children: React.ReactNode;
  context: React.Context<ContextData>;
  value: ContextData;
}

// eslint-disable-next-line max-len
function DittoContextProvider<ContextData>({ children, context, value }: DittoContextProviderProps<ContextData>) {
  return <context.Provider value={value}>{children}</context.Provider>;
}

export default DittoContextProvider;
