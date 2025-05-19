import type { Meta, StoryObj } from '@storybook/react';
import DittoContextProvider from './ditto-context-provider';
import { createContext } from 'react';

const context = createContext<{ message: string }>({ message: 'Hello from context!' });

const meta: Meta<typeof DittoContextProvider> = {
  title: 'Components/DittoContextProvider',
  component: DittoContextProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DittoContextProvider>;

interface Args {
  value: {
    message: string;
  };
}

export const Default: Story = {
  args: {
    value: {
      message: 'Hello from context!',
    },
  },
  render: (args) => (
    <DittoContextProvider context={context} value={args.value as Args['value']}>
      <div>Context value: {(args.value as { message: string }).message}</div>
    </DittoContextProvider>
  ),
};

export const WithCustomValue: Story = {
  args: {
    value: {
      message: 'Custom context value',
    },
  },
  render: (args) => (
    <DittoContextProvider context={context} value={args.value as Args['value']}>
      <div>Context value: {(args.value as { message: string }).message}</div>
    </DittoContextProvider>
  ),
};
