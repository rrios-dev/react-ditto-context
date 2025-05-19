import { useContext } from 'react';

const useDittoContext = <T>(context: React.Context<T>): NonNullable<T> => {
  const data = useContext(context);

  if (!data)
    throw new Error(
      // eslint-disable-next-line max-len
      `${context.displayName || 'Unknown'}context is not defined. Make sure you are using the provider correctly.`,
    );

  return data;
};

export default useDittoContext;
