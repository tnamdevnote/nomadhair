import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=14-3411&mode=design&t=KenYMZb4HvGFGrwj-4',
    },
    layout: 'centered',
  },
  args: {
    asChild: false,
  },
  argTypes: {
    variant: {
      options: ['default', 'outlined', 'text', 'link'],
      defaultValue: 'default',
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'lg', 'md', 'sm'],
      defaultValue: 'lg',
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: ({ variant, size }) => (
    <Button variant={variant} size={size}>
      Call To Action
    </Button>
  ),
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
  render: ({ variant, size }) => (
    <Button variant={variant} size={size}>
      Call To Action
    </Button>
  ),
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
  render: ({ variant, size }) => (
    <Button variant={variant} size={size}>
      Call To Action
    </Button>
  ),
};

export const Link: Story = {
  args: {
    variant: 'link',
    asChild: true,
  },
  render: ({ variant, size }) => (
    <Button variant={variant} size={size}>
      Call To Action
    </Button>
  ),
};
