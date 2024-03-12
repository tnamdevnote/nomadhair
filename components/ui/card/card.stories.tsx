import { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardContent } from "./card";
import { Avatar, AvatarFallback } from "../avatar";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  args: {
    intent: "primary",
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: ({ intent }) => (
    <Card className="w-96" intent={intent}>
      <CardHeader headingLevel={2} title="Title" subheader="subheading" />
      <CardContent>
        “Lorem ipsum dolor sit amet, consec tetur adi piscing elit. Praesent
        tellus leo, vesti bulum a ipsum sed, suscipit sodales ex. Vestibulum id
        varius risus. Fusce tempus tellus sed.”
      </CardContent>
    </Card>
  ),
};

export const WithAvatar: Story = {
  render: ({ intent }) => (
    <Card className="w-96" intent={intent}>
      <CardHeader
        avatar={
          <Avatar>
            <AvatarFallback className="text-neutral-90">TN</AvatarFallback>
          </Avatar>
        }
        headingLevel={2}
        title="Title"
        subheader="subheading"
      />
      <CardContent>
        “Lorem ipsum dolor sit amet, consec tetur adi piscing elit. Praesent
        tellus leo, vesti bulum a ipsum sed, suscipit sodales ex. Vestibulum id
        varius risus. Fusce tempus tellus sed.”
      </CardContent>
    </Card>
  ),
};
