import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'default',
  },
  render: ({ variant }) => <Button variant={variant}>Hello</Button>,
};
