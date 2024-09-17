import type { Meta, StoryObj } from '@storybook/react';
import TagInput from '../components/TagInput';

const meta = {
  title: 'Example/TagInput',
  component: TagInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { },
} satisfies Meta<typeof TagInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TagInputStory: Story = {
  args: {},
};
