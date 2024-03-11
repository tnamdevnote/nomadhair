import { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardContent } from "./card";
import { Avatar, AvatarFallback } from "../avatar";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-96">
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
  render: () => (
    <Card className="w-96">
      <CardHeader
        avatar={
          <Avatar>
            <AvatarFallback>TN</AvatarFallback>
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
