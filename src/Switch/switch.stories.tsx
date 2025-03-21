import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SwitchProps, Switch } from "./switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    onValueChange: { action: "value changed" },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

const Template = (args: SwitchProps) => {
  const [selected, setSelected] = useState(args.isSelected ?? false);
  return (
    <Switch
      {...args}
      isSelected={selected}
      onValueChange={(val) => {
        setSelected(val);
        args.onValueChange?.(val);
      }}
    />
  );
};

export const Default: Story = {
  render: () => <Switch />,
};

export const WithLabel: Story = {
  render: () => <Switch label="Remember Me" />,
};

export const WithLabelAndDescription: Story = {
  render: () => (
    <Switch
      label="Remember Me"
      description="Save my Login details for next time"
    />
  ),
};

export const Small: Story = {
  render: () => <Switch size="sm" label="Remember Me" />,
};

export const Medium: Story = {
  render: () => <Switch size="md" label="Remember Me" />,
};

export const CheckedByDefault: Story = {
  render: () => (
    <Switch defaultSelected label="Remember Me" description="Save my Login details for next time" />
  ),
};

export const Attributes: Story = {
    render: () =>
      <Switch  defaultSelected/>
  };

export const Controlled: Story = {
  render: Template,
  args: {
    isSelected: true,
    label: "Remember Me",
    description: "Save my Login details for next time",
  },
};

export const Disabled: Story = {
  render: () => (
    <Switch isDisabled defaultSelected label="Remember Me" description="Save my Login details for next time" />
  ),
};

export const ReadOnly: Story = {
  render: () => (
    <Switch isReadOnly defaultSelected label="Remember Me" description="Save my Login details for next time" />
  ),
};
