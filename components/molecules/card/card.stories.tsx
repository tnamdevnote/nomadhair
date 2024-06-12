import { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardContent, CardFooter } from "./card";
import { Avatar, AvatarFallback } from "@/components/atoms/avatar";
import { Button } from "@/components/atoms/button";

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
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
      <CardContent>
        “Lorem ipsum dolor sit amet, consec tetur adi piscing elit. Praesent
        tellus leo, vesti bulum a ipsum sed, suscipit sodales ex. Vestibulum id
        varius risus. Fusce tempus tellus sed.”
      </CardContent>
    </Card>
  ),
};

export const WithHeader: Story = {
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

export const WithAction: Story = {
  render: () => (
    <Card className="w-96">
      <CardContent>
        “Lorem ipsum dolor sit amet, consec tetur adi piscing elit. Praesent
        tellus leo, vesti bulum a ipsum sed, suscipit sodales ex. Vestibulum id
        varius risus. Fusce tempus tellus sed.”
      </CardContent>
      <CardFooter className="inline-flex justify-end gap-4">
        <Button variant="ghost">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};
